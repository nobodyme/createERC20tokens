import React from 'react';
import { useWeb3 } from '../context/web3-context';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import contractABI from '../data/contractABI';
import bytecode from '../data/bytecode';
import '../styles/components/CreateToken.css';
import { GiThunderball } from 'react-icons/gi';

function CreateToken({
	setStatusHandler,
	setTransactionHash,
	setContractAddress
}) {
	const web3 = useWeb3();

	return (
		<div className="createTokenForm">
			<Formik
				initialValues={{ symbol: '', name: '', totalSupply: '' }}
				validationSchema={Yup.object().shape({
					symbol: Yup.string().required('Symbol for your token is required'),
					name: Yup.string().required('Name for your token is required'),
					totalSupply: Yup.number()
						.typeError('Supply should be a number')
						.required('Total Supply of the token is required')
						.min(0, 'Number should be greater than 0')
				})}
				onSubmit={async (values, { setSubmitting, setStatus }) => {
					try {
						setStatusHandler(1);
						let accounts = await web3.eth.getAccounts();
						let currentAccount = accounts[0];
						let contractInstance = new web3.eth.Contract(contractABI);
						contractInstance
							.deploy({
								data: bytecode,
								arguments: [values.symbol, values.name, values.totalSupply]
							})
							.send({
								from: currentAccount
							})
							.on('error', error => {
								alert(error);
							})
							.on('transactionHash', transactionHash => {
								setStatusHandler(2);
								setTransactionHash(transactionHash);
								setSubmitting(false);
							})
							.on('receipt', receipt => {
								setStatusHandler(3);
								setContractAddress(receipt.contractAddress);
							});
					} catch (err) {
						setSubmitting(false);
						setStatus({ msg: err });
					}
				}}
				render={({ values, errors, status, touched, isSubmitting }) => (
					<Form className="createTokenForm__form">
						<div className="createTokenForm__header">Generate Tokens</div>
						<div className="createTokenForm__form__fields">
							<div className="form__fields">
								<div className="form__fields__value">
									<Field
										className="form__symbol form__fields__input"
										id="symbol"
										name="symbol"
										type="text"
										required
									/>
									<label className="form__fields__label" htmlFor="symbol">
										Symbol
									</label>
								</div>
								{errors.symbol && touched.symbol && (
									<div className="form__fields__errors">! {errors.symbol}</div>
								)}
							</div>
							<div className="form__fields">
								<div className="form__fields__value">
									<Field
										className="form__name form__fields__input"
										id="name"
										name="name"
										type="text"
										required
									/>
									<label className="form__fields__label" htmlFor="name">
										Name
									</label>
								</div>
								{errors.name && touched.name && (
									<div className="form__fields__errors">! {errors.name}</div>
								)}
							</div>
							<div className="form__fields">
								<div className="form__fields__value">
									<Field
										id="totalSupply"
										className="form__totalSupply form__fields__input"
										name="totalSupply"
										type="text"
										required
									/>
									<label className="form__fields__label" htmlFor="totalSupply">
										Supply
									</label>
								</div>
								{errors.totalSupply && touched.totalSupply && (
									<div className="form__fields__errors">
										! {errors.totalSupply}
									</div>
								)}
							</div>
							<div className="form__fields">
								<button
									className="form__submitButton form__fields__input"
									type="submit"
									disabled={
										values.symbol === '' ||
										values.name === '' ||
										values.totalSupply === ''
									}
									value="Submit"
								>
									<span className="form__submitButton__icon">
										<GiThunderball />
									</span>
									Generate
								</button>
								{status && status.msg && (
									<div className="form__fields__errors">! {status.msg}</div>
								)}
							</div>
							<div className="form__disclaimer">
								Disclaimer: We take no responsibility for your implementation
								decisions and any security problems you might experience, verify
								the contract yourself.
							</div>
						</div>
					</Form>
				)}
			/>
		</div>
	);
}
export default CreateToken;

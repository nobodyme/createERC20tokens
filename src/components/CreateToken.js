import React, { useState } from 'react';
import { useWeb3 } from '../context/web3-context';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import contractABI from '../data/contractABI';
import bytecode from '../data/bytecode';
import '../styles/components/CreateToken.css';
import { GiThunderball } from 'react-icons/gi';
import FormFields from './FormFields';

function CreateToken() {
	const web3 = useWeb3();
	const [status, setStatusHandler] = useState(0);
	const [transactionHash, setTransactionHash] = useState(null);
	const [contractAddress, setContractAddress] = useState(null);

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
				render={({ values, status }) => (
					<Form className="createTokenForm__form">
						<div className="createTokenForm__header">Generate Tokens</div>
						<FormFields />
						<div className="form__submitContainer">
							<button
								className="form__submitButton"
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
								<div className="form__errors">! {status.msg}</div>
							)}
						</div>
						<div className="form__disclaimer">
							We take no responsibility for any security problems you might
							experience, please verify the contract yourself.
						</div>
					</Form>
				)}
			/>
		</div>
	);
}
export default CreateToken;

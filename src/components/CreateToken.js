import React from 'react';
import { useWeb3 } from '../context/web3-context';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import contractABI from '../data/contractABI';
import bytecode from '../data/bytecode';
import '../styles/components/CreateToken.css';

function CreateToken() {
	const web3 = useWeb3();
	return (
		<div className="createTokenForm">
			<Formik
				initialValues={{ symbol: '', name: '', totalSupply: '' }}
				validationSchema={Yup.object().shape({
					symbol: Yup.string().required('Symbol for your coin is required'),
					name: Yup.string().required('Name for your coin is required'),
					totalSupply: Yup.number()
						.typeError('Supply should be a number')
						.required('Total Supply of the coin is required')
						.min(0, 'Number should be greater than 0')
				})}
				onSubmit={async (values, { setSubmitting, setStatus }) => {
					try {
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
								alert(transactionHash);
								setSubmitting(false);
							})
							.on('receipt', receipt => {
								alert(receipt.contractAddress);
							});
					} catch (err) {
						setSubmitting(false);
						setStatus({ msg: err });
					}
				}}
				render={({ errors, status, touched, isSubmitting }) => (
					<Form className="createTokenForm__form">
						<Field
							className="form__symbol form__field"
							name="symbol"
							type="string"
							placeholder="symbol"
						/>
						{errors.symbol && touched.symbol && (
							<div className="form__errors">{errors.symbol}</div>
						)}
						<Field
							className="form__name form__field"
							name="name"
							type="string"
							placeholder="name"
						/>
						{errors.name && touched.name && (
							<div className="form__errors">{errors.name}</div>
						)}
						<Field
							className="form__totalSupply form__field"
							name="totalSupply"
							type=""
							placeholder="supply"
						/>
						{errors.totalSupply && touched.totalSupply && (
							<div className="form__errors">{errors.totalSupply}</div>
						)}
						<button
							className="form__submitButton form__field"
							type="submit"
							disabled={isSubmitting}
							value="Submit"
						>
							Create Token
						</button>
						{status && status.msg && <div className="errors">{status.msg}</div>}
					</Form>
				)}
			/>
		</div>
	);
}
export default CreateToken;

import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import '../styles/components/CreateTokenForm.css';

import FormFields from './FormFields';

import contractABI from '../data/contractABI';
import bytecode from '../data/bytecode';
import { GiThunderball } from 'react-icons/gi';

function CreateTokenForm({
	web3,
	setSubmitToggle,
	setProcessedStage,
	setTransactionHash,
	setContractAddress
}) {
	return (
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
					setSubmitToggle(bool => !bool);
					setProcessedStage(1);
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
							setProcessedStage(2);
							setTransactionHash(transactionHash);
							setSubmitting(false);
						})
						.on('receipt', receipt => {
							setProcessedStage(3);
							setContractAddress(receipt.contractAddress);
						});
				} catch (err) {
					setSubmitting(false);
					setStatus({ msg: err });
				}
			}}
			render={({ values, status }) => (
				<Form className="form">
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
				</Form>
			)}
		/>
	);
}
export default CreateTokenForm;

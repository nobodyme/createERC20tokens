import React, { useState } from 'react';
import { useWeb3 } from '../context/web3-context';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import '../styles/components/CreateToken.css';

import FormFields from './FormFields';
import StatusIndicator from './StatusIndicator';
import Error from './Error';

import contractABI from '../data/contractABI';
import bytecode from '../data/bytecode';
import { GiThunderball } from 'react-icons/gi';

function CreateToken() {
	const web3 = useWeb3();
	const [processingStage, setProcessingStage] = useState(0);
	const [transactionHash, setTransactionHash] = useState(null);
	const [contractAddress, setContractAddress] = useState(null);
	const [submitToggle, setSubmitToggle] = useState(false);

	return (
		<div className="createTokenForm">
			{web3 === null || web3 === 1 ? (
				<Error web3={web3} />
			) : (
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
							setSubmitToggle(true);
							setProcessingStage(1);
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
									setProcessingStage(2);
									setTransactionHash(transactionHash);
									setSubmitting(false);
								})
								.on('receipt', receipt => {
									setProcessingStage(3);
									setContractAddress(receipt.contractAddress);
								});
						} catch (err) {
							setSubmitting(false);
							setStatus({ msg: err });
						}
					}}
					render={({ values, status }) => (
						<Form className="createTokenForm__formArea">
							<div className="createTokenForm__formContainer">
								<div className="replaceableForm__form">
									<div className="createTokenForm__header">Generate Tokens</div>
									<FormFields />
								</div>
								<div className="form__submitContainer">
									<button
										className={`form__submitButton ${
											submitToggle === false ? '' : 'flipSubmitButton'
										}`}
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
										{submitToggle === false ? 'Generate' : 'Generate New token'}
									</button>
									{status && status.msg && (
										<div className="form__errors">! {status.msg}</div>
									)}
								</div>
								<div className="form__disclaimer">
									We take no responsibility for any security problems you might
									experience, please verify the contract yourself.
								</div>
							</div>
						</Form>
					)}
				/>
			)}
		</div>
	);
}
export default CreateToken;

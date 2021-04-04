import React from "react";
import { Field } from "formik";
import "../styles/components/FormFields.css";

function FormFields() {
	return (
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
			</div>
			<div className="form__fields">
				<div className="form__fields__value">
					<Field
						id="totalSupply"
						className="form__totalSupply form__fields__input"
						name="totalSupply"
						type="number"
						required
					/>
					<label className="form__fields__label" htmlFor="totalSupply">
						Supply
					</label>
				</div>
				{/* {errors.totalSupply && touched.totalSupply && (
					<div className="form__fields__errors">! {errors.totalSupply}</div>
				)} */}
			</div>
		</div>
	);
}

export default FormFields;

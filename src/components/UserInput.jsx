export default function UserInput({ handleInput, values }) {
	return (
		<section id='user-input'>
			<div className="input-group">
				<p>
					<label>Initial Investment</label>
					<input type="number" required value={values.initialInvestment}
					       onChange={(event) => handleInput('initialInvestment', event.target.value)}/>
				</p>
				<p>
					<label>Annual Investment</label>
					<input type="number" required value={values.annualInvestment}
					       onChange={(event) => handleInput('annualInvestment', event.target.value)}/>
				</p>
			</div>
			<div className="input-group">
				<p>
					<label>Expected Return</label>
					<input type="number" required value={values.expectedReturn}
					       onChange={(event) => handleInput('expectedReturn', event.target.value)}/>
				</p>
				<p>
					<label>Duration</label>
					<input type="number" required value={values.duration}
					       onChange={(event) => handleInput('duration', event.target.value)}/>
				</p>
			</div>
		</section>
	)
}
import {calculateInvestmentResults, formatter} from "../util/investment.js";

export default function Result({values}) {
	const results = calculateInvestmentResults(values);
	const initialInvestment = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment

	return (
		<table id='result'>
			<thead>
			<tr>
				<th>Year</th>
				<th>Investment Value</th>
				<th>Interest(Year)</th>
				<th>Total Interest</th>
				<th>Invested Capital</th>
			</tr>
			</thead>
			<tbody>
			{results.map(yearData => {
				const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
				const totalInvested = yearData.valueEndOfYear - totalInterest
				return <tr key={yearData.year}>
					<td>{yearData.year}</td>
					<td>{formatter.format(yearData.valueEndOfYear)}</td>
					<td>{formatter.format(yearData.interest)}</td>
					<td>{formatter.format(totalInterest)}</td>
					<td>{formatter.format(totalInvested)}</td>
				</tr>
			})}
			</tbody>
		</table>
	)
}
import Header from "./components/Header.jsx"
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";
import {useState} from "react";

function App() {
	const [values, setValues] = useState({
		initialInvestment: null,
		annualInvestment: null,
		expectedReturn: null,
		duration: null
	})
	function handleInput(value, change) {
		setValues(prevValues => {
			return {
				...prevValues,
				[value]: +change
			}
		})
	}

	const inputIsValid = values.duration > 0;
	return (
		<>
			<Header/>
			<UserInput handleInput={handleInput} values={values}/>
			{ !inputIsValid ? <p className="center">Please enter the Investment Values</p>: undefined }
			{ inputIsValid && <Result values={values}/> }
		</>
	)
}

export default App


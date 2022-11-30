import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {

  useEffect(() => {
		// Trigger the API Call
		fetchDrinks();
	}, []);  

const [response, setResponse] = useState(null);

const fetchDrinks = async () => {
	try {
		const res = await axios.get(
			`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`,
			{
				headers: {},
				params: {},
			}
		);
    setResponse(res.data.drinks)
	} catch (err) {
		console.log(err);
	}
};




  return (
  <div>
    <div>yup</div>
    {/* <button onClick={() => fetchDrinks()}>cocktails click me</button> */}
  </div>
  );
}

export default App;

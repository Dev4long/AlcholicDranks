import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import DrinksContainer from './Containers/DrinksContainer';


function App() {

  useEffect(() => {
		fetchDrinks();
	}, []);  

const [drinks, setDrinks] = useState([]);

const fetchDrinks = async () => {
	try {
		const res = await axios.get(
			`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`,
			{
				headers: {},
				params: {},
			}
		);
    setDrinks(res.data.drinks)
	} catch (err) {
		console.log(err);
	}
};


  return (
  <div>
    <div>yup</div>
    <DrinksContainer drinks={drinks}/>
  </div>
  );
}

export default App;

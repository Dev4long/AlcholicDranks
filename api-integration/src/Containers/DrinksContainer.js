import React from 'react'
import DrinkCard from '../Cards/DrinkCard'
import "./DrinksContainer.css"

function DrinksContainer({drinks}) {
  return (
    <div className="container">
    <h1 style={{textAlign: 'center'}}>My Favorite drinks</h1>
    {drinks.map(drink => {return <DrinkCard drink={drink} key={drink.idDrink}/>})}
    </div>
  )
}

export default DrinksContainer
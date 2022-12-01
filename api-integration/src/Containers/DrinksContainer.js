import React from 'react'
import DrinkCard from '../Cards/DrinkCard'
import "./DrinksContainer.css"

function DrinksContainer({drinks}) {
  return (
    <div>
    <div className="container">
    {drinks.map(drink => {return <DrinkCard drink={drink} key={drink.idDrink}/>})}
    </div>
    </div>
  )
}

export default DrinksContainer
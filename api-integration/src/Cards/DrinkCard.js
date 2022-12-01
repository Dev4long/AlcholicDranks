import React from 'react'
import "./DrinkCard.css"

function DrinkCard({drink}) {
  return (
    <div className="drinkCard">
     
    <div className="front">
    <h3 className ="title">{drink.strDrink}</h3>
    <img className="drinkImage" alt="drinkImage" src={drink.strDrinkThumb}/>
    </div> 

    <div className="back">
    hello
    </div>

    </div>
  )
}


export default DrinkCard
import React from 'react'

function DrinkCard({drink}) {
  return (
    <div>
    
    <h2>{drink.strDrink}</h2>
    <img alt="drinkImage" src={drink.strDrinkThumb}/>
    
    </div>
  )
}


export default DrinkCard
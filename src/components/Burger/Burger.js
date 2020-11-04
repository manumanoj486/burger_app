import React from  'react';
import classes from './Burger.module.css'
import BurgerIngrediant from './BurgerIngredient/BurgerIngredient';
const burger = (props) => {
  let transformedIngrediants = Object.keys(props.ingredients).map(igKey =>{
    return [...Array(props.ingredients[igKey])].map((_,i) => {
      return<BurgerIngrediant key = {igKey+i} type = {igKey}/>
      })
    }).flat()
  
  if (transformedIngrediants.length === 0) {
    transformedIngrediants = <p> Please add ingredients </p>
  }
  return(
    
    <div className = {classes.Burger}> 
      <BurgerIngrediant type = "bread-top"/>
      {transformedIngrediants}
      <BurgerIngrediant type = "bread-bottem"/>
    </div>
  )
}
export default burger;
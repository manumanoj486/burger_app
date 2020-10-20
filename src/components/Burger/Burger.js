import React from  'react';
import classes from './Burger.module.css'
import BurgerIngrediant from './BurgerIngredient/BurgerIngredient';
const burger = (props) => {
  return(
    <div className = {classes.Burger}> 
      <BurgerIngrediant type = "bread-top"/>
      <BurgerIngrediant type = "meat"/>
      <BurgerIngrediant type = "cheese"/>
      <BurgerIngrediant type = "bread-bottem"/>
    </div>
  )
}
export default burger;
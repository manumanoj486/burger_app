import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
const  INGREDIENT_PRICES = {
    cheese: 0.7,
    salad: 2,
    bacon:1.7,
    meat: 3
}

class BurgerBuilder extends Component{
  state = {
    ingredients: {
      cheese: 0,
      salad: 0,
      bacon: 0,
      meat: 0,
    },
    price: 5
  }
  addIngreadentsHandler = (type) => {
    let ingr = {...this.state.ingredients}
    ingr[type] += 1
    let newPrice = this.state.price + INGREDIENT_PRICES[type]

    this.setState({price: newPrice, ingredients: ingr})
  }

  removeIngreadentsHandler = (type) => {
    if(this.state.ingredients[type] > 0){
      let ingr = { ...this.state.ingredients }
      ingr[type] -= 1
      let newPrice = this.state.price - INGREDIENT_PRICES[type]

      this.setState({price: newPrice, ingredients: ingr})
    }  
  }
  render(){
    let disableInfo = {
      ...this.state.ingredients
    }
    for(let x in disableInfo){
      disableInfo[x] = this.state.ingredients[x] <=0
    }

    return(
      <Aux>
        <div>
          {this.state.price.toFixed(2)}
          <Burger ingredients = { this.state.ingredients } />  
          <BuildControls 
          addIng = {this.addIngreadentsHandler} 
          remIng = {this.removeIngreadentsHandler}
          disableInfo = {disableInfo}
          price = {this.state.price}
          ></BuildControls>
        </div>
      </Aux>  
      
    )
  }
}
export default BurgerBuilder;
import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
class BurgerBuilder extends Component{
  render(){
    return(
      <Aux>
        <div>
          <Burger/>  
        </div>
      </Aux>  
      
    )
  }
}
export default BurgerBuilder;
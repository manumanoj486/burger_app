import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import classes from './Layout.css';

const Layout = (props)=>{
    return(
        <Aux>
            <div>toolbar SlideDrawer BackDrop</div>
            <main className= { classes.Content } >
               
                { props.children }
            </main>   
        </Aux>     
    )      
}

export default Layout;

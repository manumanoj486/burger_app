import React from 'react';
import Aux from '../../hoc/Aux/Aux';

const Layout = (props)=>{
    return(
        <Aux>
            <div>toolbar SlideDrawer BackDrop</div>
            <main>
                { props.children }
            </main>   
        </Aux>     
    )      
}

export default Layout;

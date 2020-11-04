import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl'
const buildControls = (props) => {
    let controls = [ {label: "Salad", type: "salad"},
        {label: "Bacon", type: "bacon"},
        {label: "Cheese", type: "cheese"},
        {label: "Meat", type: "meat"},
    ];
    return(
        <div className = { classes.BuildControls }>
            <p> Current Price is : <strong>{props.price.toFixed(2)} </strong></p>
            { controls.map((ctl) => {
                return <BuildControl key = {ctl.label} 
                label = { ctl.label } 
                addIng = {() => props.addIng(ctl.type)}
                remIng = {() => props.remIng(ctl.type)}   
                isDisable = { props.disableInfo[ctl.type]     
                }
                />
            })}
        </div>
    )
}

export default buildControls;
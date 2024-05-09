import React from "react";
import {Button} from "primereact/button";

const InputButton=(props)=>{
        return (
            <Button label={props.label}
                    icon={props.icon}
                    severity={props.severity}
                    className={'c_inputButton'}
                    onClick={props.onClick ? ()=>props.onClick() : ()=>{}}
                    tooltip={props.tooltip}
            />
        );
}

export default InputButton
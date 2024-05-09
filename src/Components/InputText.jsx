import React from "react";
import { InputText }  from 'primereact/inputtext' ;

const TextInput=(props)=>{
        return (
            <div className={'row'}>
                <div className={'col-md-12'}>
                    <p className={'title-input'}>{props.title}</p>
                </div>
                <div className={'col-md-12'}>
                    <InputText className={`c_inputText ${props.important ? 'vacio' : ''}`}
                           placeholder={props.placeholder}
                           onChange={props.onChange ? (e)=>props.onChange(e) : ()=>{}}
                           value={props.value}
                    />
                </div>
            </div>
        );
}

export default TextInput
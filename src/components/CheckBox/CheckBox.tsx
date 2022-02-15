import React from "react";

interface Props{
    label?:string;
    id:string;
    name: string;
    checked?:boolean;
    value: boolean;
    onClick():void;
}

const CheckBox: React.FC<Props> = (props:Props):any => {

    return(
        <label>
            {props.label}
            <input type="checkbox" 
            id={props.id} 
            name={props.name}
            checked={props.checked} 
            onClick={props.onClick}/>
        </label>
    );
}

export default CheckBox;
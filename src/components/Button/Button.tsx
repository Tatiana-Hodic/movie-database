import React from "react";
import './Button.css';

interface Props{
    label:string;
    id:string;
    name: string;
    className?:string;
    imgClass?:string;
    srcImg?:string;
    onClick(): void;
}

const Button: React.FC<Props> = (props:Props):any => {
    return(
        <button id={props.id} name={props.name} className={props.className} onClick={props.onClick}>
        <img className={props.imgClass} src={props.srcImg} alt="" />
        {props.label}</button>
    );
}

export default Button;
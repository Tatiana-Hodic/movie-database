import React from 'react'
import './TextInput.css';

interface Props {
    labelBefore?: string;
    labelAfter?: string;
    name:string;
    value:string;
    placeholder?:string;
    className?:string;
    onChange(e:any):void;
}
const TextInput: React.FC<Props> = (props:Props):any => {

    return (
        <div className={props.className}>
            <table>
                <tr>
                    <td>
                        <label>{props.labelBefore}</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input placeholder={props.placeholder} name={props.name} id={props.name} type="text" value={props.value} onChange={props.onChange}></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>{props.labelAfter}</label>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default TextInput;
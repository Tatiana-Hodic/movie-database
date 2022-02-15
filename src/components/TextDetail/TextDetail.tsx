import React from 'react'
import './TextDetail.css';

interface Props {
    labelBefore?: string;
    labelAfter?: string;
    value:string;
    name:string;
    className?:string;
}
const TextDetail: React.FC<Props> = (props:Props):any => {

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
                        <label id={props.name}>{props.value}</label>
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

export default TextDetail;
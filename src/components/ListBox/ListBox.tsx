import React, {useState} from 'react';
import './ListBox.css';

interface Props {
    id:string;
    name:string;
    initialValue:string;
    title:string;
    options:any[];
    selectedProperty:string;
    collectionTypeGeneral:boolean;
    remainOpened:boolean;
    isDisabled:boolean;
}

export const ListBox = (props:Props):any => {
    const [selectedItem, setSelectedItem] = useState<string>(props.initialValue);

    const options = Object.keys(props.options).map((value:any, index:number):any => 
        <option key={index} value={value}>{props.options[index]}</option>
    );

    return(
        <label htmlFor="operation">
            {props.title}
            <select id={props.id}
                name={props.name} 
                required value={selectedItem} 
                disabled={props.isDisabled} 
                onChange={(event) => setSelectedItem(event?.target.value)}>
                <option value="">--{props.initialValue}--</option>
                {options}
            </select>
        </label>
    );
}
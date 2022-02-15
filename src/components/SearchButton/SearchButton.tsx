import React, {useState} from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import './SearchButton.css';

interface Props {
    id:string;
    name:string;
    title?:string;
    buttonLabel:string;
    onChange(data:any):void;
}

export const SearchButton = (props:Props):any => {
    const [search, setSearch] = useState<string>('');
    const REACT_APP_MY_API_KEY="9c3ab4";
    const token = REACT_APP_MY_API_KEY;
    const url = "http://omdbapi.com/?apikey=";
    const [data, setData] = useState<[]>();
    const loadData = async (url:string, token:string) => {
        const res = await fetch(url + token + "&s=" + search);
        setData(await res.json());
        props.onChange(data);
    }

    return(
        <div className="search">
            <TextInput className="search__Input" name="SeonCarchInput" value={search} placeholder="Search" onChange={(e:any) => {setSearch(e.target.value)}}/>
            <Button className="search__Btn" label="Search" id={props.id + "button"} name={props.name + "button"} onClick={() => {loadData(url, token)}}/>
        </div>
    );
}
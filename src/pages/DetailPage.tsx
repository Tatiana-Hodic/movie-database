import React, {useEffect, useState} from 'react';
import Header from '../components/Header/Header';

interface IDetailPage {
    title:string;
    id:string;
}

export function DetailPage(props:IDetailPage):any {

    const REACT_APP_MY_API_KEY="9c3ab4";
    const token = REACT_APP_MY_API_KEY;
    const url = "http://omdbapi.com/?apikey=";
    const [toShow, setToShow] = useState<any>({});

    const detail = JSON.parse(localStorage.detail);
    console.log(detail);

    const loadData = async (url:string, token:string, id:string) => {
        const res = await fetch(url + token + "&i=" + id);
        setToShow(await res.json());
    }

    useEffect(() => {loadData(url, token, detail)}, []);

    const {id, title} = props;
    let values:string[] = [];
    let keys:string[] = [];

    for(let index in toShow)
    {
        if(index !== 'Ratings' && index !== 'Poster')
        {
            keys.push(index);
            values.push(toShow[index]);
        }
    }

    const imgSrc =  toShow['Poster'];

    const header = keys.map((o:any):any => {return <th>{o}</th>})

    const details = values.map((o:any):any => {return <td>{o}</td>});

    const renderRowOfToShow = (row:any) => {
        let values: string[] = [];
        for (let index in row) {
          values.push(row[index]);
        }
        return <tr>{values.map(o => <td>{o}</td>)}</tr>
    }

    const ratings = toShow['Ratings']?.map((o:any):any => {return renderRowOfToShow(o)});

    
    return(
        <div>
            <Header title="Show detail" type={0}/>
            <img src={imgSrc}/>
            <table className="movie__table">
                <thead>
                    <tr>
                        {header}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {details}
                    </tr>
                </tbody>
            </table>
            <p>Ratings</p>
            <table className="movie__table">
                <thead>
                    <tr>
                        <th>Source</th><th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {ratings}
                </tbody>
            </table>
        </div>
    );
}

export default DetailPage;
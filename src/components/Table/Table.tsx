import React, {useState, useEffect} from "react";
import { Header } from "../Header/Header";
import './Table.css';
import CheckBox from "../CheckBox/CheckBox";
import { SearchButton } from "../SearchButton/SearchButton";
import Button from "../Button/Button";

interface Props{
    header:string[];
    content:any[];
    checkHeader:boolean;
    checkedRows:boolean;
    addSearch:boolean;
    buttonedRows:boolean;
    showDetail(object:any):void;
    onChange(e:any):void;
    onAddToLocalStorage(o:any):void;
    onRemoveFromLocalStorage(o:any):void;
}

export const Table = (props:Props):any => {

    let initialValueCheckedColumns:boolean[] = [];
    for(let i = 0; i <= props.header.length - 1; i++)
    {
      initialValueCheckedColumns[i] = false;
    }
    const content = props.content;
    let initialValueCheckedRows:boolean[] = [];
    for(let i = 0; i <= content?.length - 1; i++)
    {
      initialValueCheckedRows[i] = false;
    }

    const [checkedColumns, setCheckedColumns] = useState<boolean[]>(initialValueCheckedColumns);
    const [checkedRows, setCheckedRows] = useState<boolean[]>(initialValueCheckedRows);


    const getUpdatedArrayColumns = (index:number):any => {
      let updatedArrayColumns: boolean[] = [];
      for(let i = 0; i<= header.length - 1; i++)
      {
        if(i !== index)
        {
          updatedArrayColumns.push(checkedColumns[i]);
        }
        else {
          updatedArrayColumns.push(!checkedColumns[i])
        }
      }
      return updatedArrayColumns;
    }

    const getUpdatedArrayRows = (index:number, sourceArray:any[]):any => {
      let updatedArrayRows: any[] = [];
      for(let i = 0; i<= content.length - 1; i++)
      {
        if(i !== index)
        {
          updatedArrayRows.push(sourceArray[i]);
        }
        else {
          updatedArrayRows.push(!sourceArray[i])
        }
      }
      return updatedArrayRows;
    }

    const header = props.header.map(
        (o:any, index:number) => 
      {
        if(props.checkHeader)
        {
          return<th>{o}<CheckBox id="checkBox" name="checkBox" value={checkedColumns[index]} onClick={() => setCheckedColumns(getUpdatedArrayColumns(index))}/></th>;
        }
        else {
          return <th>{o}</th>;
        }
      }
    );

    const RenderRow = (row:any, index:number):any => {
      let values: any[] = [];
      for (let index in row) {
        if(index !== 'Poster')
        {
          values.push(row[index]);
        }
      }
      const poster = <img src={row['Poster']}/>;
      console.log(poster);
      values.push(poster);
      
      return <tr>
          <td>
            <Button label={""} id={"details"} name={"details"}
            srcImg="https://www.flaticon.com/free-icons/star"
            onClick={() => 
              props.showDetail(values[2])
          } />
          </td>
          <td>
          <Button label={""} id={"favorites"} name={"favorites"}
          onClick={() => props.onAddToLocalStorage(values)} />
          </td>
          <td>
          <Button label={""} id={"favoritesRemove"} name={"favoritesRemove"}
          onClick={() => props.onRemoveFromLocalStorage(values)} />
          </td>
            {values.map(o => <td>{o}</td>)}
          <td><CheckBox id={"check" + index} name={"check" + index} value={checkedRows[index]} onClick={() => setCheckedRows(getUpdatedArrayRows(index, checkedRows))}/>
        </td></tr>
    };

    const renderRows = (rows:any[]):any =>
    {
      return content?.map((r, index) => RenderRow(r, index));
    };

    return(
        <div>
        <table className="movie__table">
          <thead>
        <tr>
          {header}
        </tr>
        </thead>
          <tbody>
            {renderRows(content)}
          </tbody>
        </table>
      </div>
    );
}

export default Table;
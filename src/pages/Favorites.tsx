import React, {useEffect, useState} from 'react';
import TextDetail from '../components/TextDetail/TextDetail';
import Table from '../components/Table/Table';
import Batman from '../TestData/Batmans.json';
import { SearchButton } from '../components/SearchButton/SearchButton';
import Layout from './Layout';
import Header from '../components/Header/Header';

export function Favorites():any {
    const content = JSON.parse(localStorage.favourites);
  
    return (
      <div className="container">
      <Header title="Favorites" type={0}/>
        <SearchButton id={"search"} name={"search"} buttonLabel={"Hledat"}  onChange={(o:any) => console.log(o)} />
        <Table 
          header={["", "", "", "Title", "Year", "ImdbID", "Type", "Poster", "Select as favorite"]} 
          content={content} 
          checkHeader={false} 
          checkedRows={true} 
          buttonedRows={true}
          addSearch={true}
          showDetail={() => console.log("showDetail")}
          onChange={(o:any) => {console.log(o)}}
          onAddToLocalStorage={(o:any) => console.log(o)}
          onRemoveFromLocalStorage={(o:any) => console.log(o)}
        />
      </div>
    );
}

export default Favorites;
import React, {useEffect, useState} from 'react';
import TextDetail from '../components/TextDetail/TextDetail';
import Table from '../components/Table/Table';
import Batman from '../TestData/Batmans.json';
import { SearchButton } from '../components/SearchButton/SearchButton';
import Layout from './Layout';
import Header from '../components/Header/Header';

export function OverviewPage():any {
    const [foundFilms, setFoundFilms] = useState<any>([]);
    const [favourites, setFavourites] = useState<any[]>([]);
    const content = foundFilms?.Search;

    const addDetail = (detail:string) => {
      localStorage.setItem("detail", JSON.stringify(detail));
    } 

    const addFavourite = (object:any) => {
      let favouritesVar = favourites;
      favouritesVar.push(object);
      setFavourites(favouritesVar);
      localStorage.setItem("favourites", JSON.stringify(favourites));
    }

    const removeFavorite = (id:string) => {
      let favouritesVar = favourites;
      let favouritesVarFiltered = favouritesVar.filter(function(value, index, favouritesVar){
        return value.ImdbID === id;
      });
      setFavourites(favouritesVarFiltered);
      localStorage.setItem("favourites", JSON.stringify(favourites));
    }
  
    return (
      <div className="container">
        <Header title="Overview" type={0}/>
        <SearchButton id={"search"} name={"search"} buttonLabel={"Hledat"}  onChange={(e:any) => setFoundFilms(e)} />
        <Table 
          header={["Show detail", "Add to favourites", "Remove from favorites", "Title", "Year", "ImdbID", "Type", "Poster", "Select as favorite"]} 
          content={content} 
          checkHeader={false} 
          checkedRows={true} 
          buttonedRows={true}   
          addSearch={true}
          showDetail={(n:string) => addDetail(n)}
          onChange={(e:any) => {setFoundFilms(e.target.value)}}
          onAddToLocalStorage={(o:any) => {addFavourite(o)}}
          onRemoveFromLocalStorage={(o:any) => {removeFavorite(o.ImdbID)}}/>
      </div>
    );
}

export default OverviewPage;
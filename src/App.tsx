import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { DetailPage } from './pages/DetailPage';
import Favorites from './pages/Favorites';
import Overview from './pages/Overview';

function App() {
  const [detail, setDetail] = useState<string>('');

  return (
    <BrowserRouter>
      <div className="App">
      <nav className="navigation">
        <Link to='/'>Overview</Link>
        <Link to='/detailpage'>Detail Page</Link>
        <Link to='/favourites'>Favourite Films</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Overview/>} />
        <Route path='/detailpage' element={<DetailPage title="Film detail" id={detail}/>} />
        <Route path='/favourites' element={<Favorites/>} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
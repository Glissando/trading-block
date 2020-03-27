import React, { useState, useEffect } from 'react';
import SearchField from "react-search-field";
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import CompanyInfo from './CompanyInfo/CompanyInfo';
import News from './News/News';
import Quote from './Quote/Quote';
import NotFoundError from './NotFoundError/NotFoundError';
import { faComments, faNewspaper, faIndustry } from '@fortawesome/free-solid-svg-icons'
import { token } from './token';
import './App.css';

const TITLE = 'Financial Overview';
const TOKEN = token;

function App() {
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(true);
  const [invalidSymbol, setInvalidSymbol] = useState(false);
  document.title = TITLE;
  const paths = ['quote', 'news/last', 'company'];
  const [navIndex, setNavIndex] = useState(0);

  const NavElements = [
    {
      name: 'Quote',
      icon: faComments
    },
    {
      name: 'News',
      icon: faNewspaper
    },
    {
      name: 'Info',
      icon: faIndustry
    },
  ];

  async function Load(symbol, path) {
    try {
      const response = await fetch(`https://cloud.iexapis.com/stable/stock/${symbol}/${paths[path]}?token=${TOKEN}&format=json`);
      const json = await response.json();
      data[path] = json;
      const newData = [...data];
      setData(newData);
      setUpdate(false);
      setInvalidSymbol(false);
    } catch(error) {
      setInvalidSymbol(true);
      console.error(error);
    }
  }

  function onSearch(text) {
    paths.map((path, index) =>
        Load(text, index)
      );
  }

  function onNavChange(index, name) {
    setNavIndex(index);
  }

  function onChange(text) {
    
  }

  function onEnter(text) {
    onSearch(text);
  }

  function onSearchClick(text) {
    onSearch(text);
  }

  useEffect(() => {
    if(update) {
      paths.map((path, index) =>
        Load('AAPL', index)
      );
    }
  });
  
  return(
    <div className="App">
      <header className="App-header">
        <Navbar elements={NavElements} onNavChange={onNavChange}></Navbar>
        <div className="App-Body">
          <SearchField
            placeholder="Search..."
            onChange={onChange}
            onEnter={onEnter}
            onSearchClick={onSearchClick}
            searchText="AAPL"
            classNames="Searchbar"
          />
          {invalidSymbol && <NotFoundError></NotFoundError>}
          {navIndex === 0 && data[0] && <Quote quote={data[0]}></Quote>}
          {navIndex === 1 && data[1] && <News news={data[1]}></News>}
          {navIndex === 2 && data[2] && <CompanyInfo company={data[2]}></CompanyInfo>}
        </div>
      </header>
      <Footer></Footer>
    </div>
  );
}

export default App;
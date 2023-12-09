import React, { useEffect } from 'react';
import logo from './logo.svg';
import './globals.css';
import { CatListComponent } from './components/catListComponent/CatListComponent';
import { HomePage } from './components/screens/homePage/Homepage';
import { fetchCatsData } from './api/fetchCatsData';
import { RecoilRoot } from 'recoil';

function App() {

  useEffect(() => {
    fetchCatsData(20, 0);
  }, [])

  return (
    <RecoilRoot>
      <div className="percept">
        <HomePage />
      </div>
    </RecoilRoot>
  );
}

export default App;

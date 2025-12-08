import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewInternetSpeed from './new_internet_speed';
import PlaceList from './placeList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='*' element={<PlacesList />} /> */}
        <Route path='/new-internet-speed' element={<NewInternetSpeed />} />
        <Route path='*' element={<PlaceList />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);

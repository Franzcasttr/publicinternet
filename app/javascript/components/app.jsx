import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlacesList from './PlaceList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='*' element={<PlacesList />} /> */}
        <Route path='*' element={<PlacesList />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);

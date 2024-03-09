import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';

function App() {
    return (
      <>
        <BrowserRouter>
          <Route component={Navbar} />
        </BrowserRouter>
      </>
    );
  }

export default App;
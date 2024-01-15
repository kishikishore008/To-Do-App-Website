import React from 'react';
import { Suspense,lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Dashboard} from './components/Dashboard'; 
import {Landing} from './components/Landing'; 

function App() {
  
  return (
    <Router>
    <Routes>
      <Route path="/dashboard" element={<Suspense fallback={"loading.."}><Dashboard/></Suspense>} />
      <Route path="/"element={<Landing/>}/>
    </Routes>
    </Router>
  );
}

export default App;
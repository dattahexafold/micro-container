import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
const Microfrontend1 = lazy(() => import('microfrontend1/App'));
import Dashboard from './Component/Dashboard';

function App() {
  return (
    <Router>
      <nav>
        {/* <Link to="/">Home</Link> */}
        {/* <Link to="/microfrontend1">Microfrontend 1 </Link> */}
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/microfrontend1/*" element={<Microfrontend1 />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

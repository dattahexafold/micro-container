import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Microfrontend1 = lazy(() => import('microfrontend1/App'));

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/microfrontend1">Microfrontend 1 </Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<div>Container Home</div>} />
          <Route path="/microfrontend1/*" element={<Microfrontend1 />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

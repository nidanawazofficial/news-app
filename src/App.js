import './App.css';
import React from 'react';
import NavBar from './Components/NavBar';
import News from './Components/News';
import { Routes, Route} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  const pageSize = 6;
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<News key="general" pageSize={pageSize} country="us" category="general" />} />
          <Route path="/health" element={<News key="health" pageSize={pageSize} country="us" category="health" />} />
          <Route path="/entertainment" element={<News key="entertainment" pageSize={pageSize} country="us" category="entertainment" />} />
          <Route path="/sports" element={<News key="sports" pageSize={pageSize} country="us" category="sports" />} />
          <Route path="/science" element={<News key="science" pageSize={pageSize} country="us" category="science" />} />
          <Route path="/technology" element={<News key="technology" pageSize={pageSize} country="us" category="technology" />} />
          <Route path="/business" element={<News key="business" pageSize={pageSize} country="us" category="business" />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;

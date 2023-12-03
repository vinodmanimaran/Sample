import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Blog from './Pages/Blog/Blog.jsx';
import SingleBlog from './Pages/SingleBlog/SingleBlog.jsx';
function App () {
  

  return (
    <div className="App">
      <Router>
        <main>
          <Routes>
          <Route path="/" element={<Blog />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;

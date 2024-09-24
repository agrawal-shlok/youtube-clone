import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Vedio from './pages/Vedio/Vedio';

const App = () => {

const [sidebar , setSidebar] = useState(true)

  return (
    
      <div>
        <Navbar setSidebar = {setSidebar}/>
        <Routes>
          <Route path='/' element={<Home sidebar={sidebar} />} />
          <Route path='/vedio/:categoryId/:videoId' element={<Vedio />} />
        </Routes>
      </div>
    
  );
}

export default App;

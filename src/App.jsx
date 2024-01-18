// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './components/About/About';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import UserContextProvider from './Context/UserContextProvider';
import Profile from './components/Profile/Profile';


const App = () => {
  return (
    <UserContextProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
  </Router>
  </UserContextProvider>
  );
};

export default App;

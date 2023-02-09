import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const HomePage = lazy(() => import('./views/HomePage'));

const navList = [
  {
    link: '/',
    title: 'Home',
  },
  {
    link: '/mission',
    title: 'Our mission',
  },
  {
    link: '/places',
    title: 'Places',
  },
  {
    link: '/team',
    title: 'Team',
  },
]

function App() {
  return (
    <BrowserRouter>
      <Header navList={navList} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mission" element={<HomePage />} />
        <Route path="/places" element={<HomePage />} />
        <Route path="/team" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

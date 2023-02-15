import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Login from './Login';
import MainPage from './MainPage';
import NavBar from './NavBar';
// import Registration from './Registration';

export default function App() {
  return (
    <>
      <div className="container" style={{ marginTop: 15 }}>
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/reg" element={<Registration />} />
        <Route path="/auth" element={<Login />} /> */}
      </Routes>
    </>
  );
}

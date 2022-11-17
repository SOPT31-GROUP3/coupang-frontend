import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Category from 'pages/Category';
import Cart from 'pages/Cart';
import MyPage from 'pages/MyPage';

function Router() {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category' element={<Category />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/*' element={<p>Page Not Found</p>} />
      </Routes>
  );
}

export default Router;

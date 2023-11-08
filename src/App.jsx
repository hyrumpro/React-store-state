import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { AboutUs } from './Pages/AboutUs';
import { Products } from './Pages/Products';
import { Cart } from './Pages/Cart';
import { PageNotFound } from './Pages/404';
import { Layout } from './components/Layout';

function App() { 

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
             <Route index element={<Home />} />
             <Route path="/about-us" element={<AboutUs />} />
             <Route path="/products/*" element={<Products />} />
             <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;



{/*
Multiple Routes
<Routes path="/">
        <Route index element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
</Routes>

<Routes path="/cursos">
        <Route index element={<HomeCursos />} />
        <Route path="/javascript" element={<Javascript />} />
        <Route path="/reacts" element={<React />} />
</Routes>


Default : 

<Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about-us" element={<AboutUs />} />
     <Route path="/products" element={<Products />} />
</Routes>

<Layout />
      */}
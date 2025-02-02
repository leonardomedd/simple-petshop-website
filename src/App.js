import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import Contact from './components/Contact';
import Cart from './components/Cart'; // Importe o componente Cart
import NavigationBar from './components/Navbar';
import Footer from './components/Footer'; // Importe o Footer
import { CartProvider } from './CartContext'; // Importe o CartProvider

function App() {
  return (
    <CartProvider>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} /> {/* Adicione a rota /cart */}
      </Routes>
      <Footer /> {/* Certifique-se de usar o Footer */}
    </CartProvider>
  );
}

export default App;
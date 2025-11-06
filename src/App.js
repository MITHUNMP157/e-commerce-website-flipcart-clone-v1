import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Seller from "./components/Seller";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  return (
    <div>
      <HashRouter>
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/products" element={<Products />} />
            <Route path="/seller" element={<Seller />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;

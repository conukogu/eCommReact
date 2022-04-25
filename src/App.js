import React, {useState, Component} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Filter from "../src/Components/Filter";
import "./styles.css";
import Products from "../src/Components/Product_Slider";
import Footer from "../src/Components/Footer";
import Navbar from "../src/Components/Navbar";
import Form from "../src/Components/Form";
import PriceSearch from "../src/Components/PriceSearch";
import Blurb from "../src/Components/ProductBlurb";

import "../src/Components/main.css";
import Product_Slider2 from "../src/Components/Product_Slider2";
import ProductSlider from "../src/Components/ProductSlider";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  //     return (
  //       <>
  //       <Navbar/>
  //         <main>
  //             <Routes>
  //                 <Route path="/" element={Filter} exact />
  //                 <Route path="/buy" component={Products} />
  //                 <Route path="/contact" component={Form} />
  //                 <Route component={Error} />
  //             </Routes>
  //         </main>
  //         <Footer/>
  //         </>
  //     )
  // }

  // }

  // export default App;

  return (
    <div className="router1">
      <Router>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="router2">
          <Routes>
            <Route
              path="/"
              element={<Filter menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
            />
            <Route path="/shop" element={<Product_Slider2 />} />
            <Route path="/shop" element={<Products />} />
            <Route path="/contact" element={<Form />} />
          </Routes>
        </div>
        <Footer />
      </Router>

      {/* <Products /> */}
      {/* <Blurb/> */}
      {/* <Filter menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}

      {/* <PriceSearch/> */}

      {/* <Form/> */}
    </div>
  );
}

export default App;

import React, {useState, Component} from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Filter from './Components/Filter';
import './styles.css';
import Products from './Components/Product_Slider';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import PriceSearch from './Components/Pricesearch';
import Blurb from './Components/ProductBlurb';



function App() {



     const [menuOpen, setMenuOpen] = useState(false)

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
    <>
      <Router>
        <div>
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Routes>
            <Route
              path="/"
              element={<Filter menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
            />
            <Route path="/shop" element={<Products />} />
            <Route path="/contact" element={<Form />} />
          </Routes>
          <Footer />
        </div>
      </Router>

      {/* <Products /> */}
      {/* <Blurb/> */}
      {/* <Filter menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}

      {/* <PriceSearch/> */}

      {/* <Form/> */}
    </>
  );
}

export default App;

// import { useState ,createContext, useEffect, lazy, Suspense } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Product from './components/Product/Product';
import content from './components/Product/content'
import TestiMonials from './components/TestiMonials/TestiMonials';
// import Loader from "./components/Loader/Loader";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Home from '../src/pages/Home'
// const Shop =lazy(()=> import("./pages/Shop"))
// // const Cart =lazy(()=> import("./pages/Cart"))
// const ProductDetails =lazy(()=> import("./pages/ProductDetails"));
// export const DataContainer = createContext();
function App() {
  
  return (
    // <DataContainer.Provider value={{CartItem,setCartItem,addToCart,decreaseQty,deleteProduct,selectedProduct,setSelectedProduct}}>
    //   <Suspense fallback={<Loader/>}>
        <Router>
      
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
           
          </Routes>
          {content.map(content => (
                    <Product 
                        key={content.id}
                        offer={content.offer}
                        image={content.image}
                        productName={content.productName}
                        price={content.price}
                     
                    />
                ))}
                 <TestiMonials />
          <Footer />
        </Router>
    //   </Suspense>
    // </DataContainer.Provider>
  )
}

export default App

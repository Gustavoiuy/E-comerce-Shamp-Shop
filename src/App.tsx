import { Route, Routes} from "react-router";

import { Home } from "./pages/Home";
import { Layout } from "./layout/Layout";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { UserContextProvider } from "./context/userContext";
import { ProductContextProvider } from "./context/ProductContext";
import { Toaster } from "react-hot-toast";
import { DetailProduct } from "./pages/DetailProduct";

export default function App() {
  return (
    <UserContextProvider>
      <ProductContextProvider>
          <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
             <Route
              path="/detailProduct/:id" 
              element={<DetailProduct/>}></Route>
          </Route>
      
        
        </Routes>
      </ProductContextProvider>
     
    <Toaster/>
    </UserContextProvider>
  
    
  );
}

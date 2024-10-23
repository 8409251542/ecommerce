import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Carts from "./Pages/Carts";
import ProductList from "./Pages/ProductList";
import ProductDetails from "./Pages/ProductDetails";

const AppRouter=()=>{
    return(
        <>
            <Router>
                <Routes>
                    <Route path={"/Carts"} element={<Carts/>}/>
                    <Route path={"/ProductList"} element={<ProductList/>}/>
                    <Route path={"/Product/:id"} element={<ProductDetails/>}/>
                </Routes>
            </Router>
        </>
    )
}
export default AppRouter;
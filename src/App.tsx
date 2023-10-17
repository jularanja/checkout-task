import {Routes , Route} from "react-router-dom"
import { Checkout } from "./pages/Checkout"
import { Basket } from "./pages/Basket"
import { Vending } from "./pages/Vending"
import {Navbar} from "./components/Navbar"
import { ShoppingBasketProvider } from "./context/ShoppingBasketContext"





function App() {
 
  return (
  <>
  <Navbar/>
  <ShoppingBasketProvider>
  
  
  <Routes>
    <Route path="/" element={<Checkout/>}/>
    <Route path="/basket" element={<Basket/>}/>
    <Route path="/vending" element={<Vending/>}/>
  </Routes>
 
 
  </ShoppingBasketProvider>

  </>
  
  )
}

export default App

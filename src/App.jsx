import { BrowserRouter, Route, Routes } from "react-router"
import Homepage from "./pages/Homepage"
import Aboutpage from "./pages/Aboutpage"
import Prodottipage from "./pages/Prodottipage"
import DefaultLayout from "./layouts/DefaultLayout"
import Productpage from "./pages/Productpage"
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<Aboutpage />} />
          <Route path='/prodotti' element={<Prodottipage />} />
          <Route path="/prodotti/:id" element={<Productpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

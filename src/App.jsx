import { BrowserRouter, Route, Routes } from "react-router"
import Homepage from "./pages/Homepage"
import Aboutpage from "./pages/Aboutpage"
import Prodottipage from "./pages/Prodottipage"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<Aboutpage />} />
        <Route path='/prodotti' element={<Prodottipage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

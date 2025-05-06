import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Homepage from '@pages/HomePage'
import Productlist from '@pages/Productlist'
import ProductDetail from '@pages/ProductDetail'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/productlist" element={<Productlist />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter , Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('@pages/Homepage'));
const Productlist = lazy(() => import('@pages/Productlist'));
const ProductDetail = lazy(() => import('@pages/ProductDetail'));

function App() {
  
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading the page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productlist" element={<Productlist />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App

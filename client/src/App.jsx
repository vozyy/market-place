import { BrowserRouter , Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import PageSkeleton from '@shared/components/PageSkeleton'

const HomePage = lazy(() => import('@pages/Homepage'));
const Productlist = lazy(() => import('@pages/Productlist'));
const ProductDetail = lazy(() => import('@pages/ProductDetail'));
const ListPage = lazy(() => import('@pages/ListPage'));

function App() {
  
  return (
    <BrowserRouter>
      <Suspense fallback={<PageSkeleton />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productlist" element={<Productlist />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/list" element={<ListPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App

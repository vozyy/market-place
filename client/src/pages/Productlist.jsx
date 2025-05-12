import React, { useTransition } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import './Productlist.scss'
import rugImg from '@assets/images/table_rug.jpg'
import plantsImg from '@assets/images/plants.jpg'
import booksImg from '@assets/images/books.jpg'
import Pagination from '@shared/components/Pagination'
import  Navigation from '@features/navigation/Navigation'
import ProductCard from '@features/product/ProductCard'
import usePagination from '@shared/hooks/usePagination.js'

function Productlist() {

  const [searchParams, setSearchParams] = useSearchParams();
  const selectedTag = searchParams.get('tag') ?? 'all';
  const pageParam = Number(searchParams.get('page') ?? '1');
  const [isPending, startTransition] = useTransition();

  const products = [
    { 
        id: 12, 
        url: rugImg,
        alt: 'table',
        name: 'Table', 
        description: 'My fresh new rug that has not been used at all',
        price: 34,
        tags: ['home', 'furniture'],
        phone: '+421987654321',
        email: 'david@test.com',
        seller_name: 'David'
    },
    { 
        id: 10, 
        url: plantsImg,
        alt: 'plants', 
        name: 'Plants', 
        description: 'Selling my plants since im moving to a flat and theres unfortunatelly not enough space for them',
        price: 13,
        tags: ['home'],
        phone: '+421123456789',
        email: 'orsi@test.com',
        seller_name: 'Orsi'
    },
    { 
        id: 1, 
        url: booksImg,
        alt: 'books', 
        name: 'Book collection', 
        description: 'Im selling my book collection for a penny' ,
        price: 1,
        tags: ['relax', 'books'],
        phone: '+421444444444',
        email: 'csilla@test.com',
        seller_name: 'Csilla'
    },
    { 
        id: 124, 
        url: booksImg,
        alt: 'books', 
        name: 'stuff1', 
        description: 'Im selling my book collection for a penny' ,
        price: 1,
        tags: ['relax', 'books'],
        phone: '+421444444444',
        email: 'csilla@test.com',
        seller_name: 'Csilla'
    },
    { 
        id: 19, 
        url: booksImg,
        alt: 'books', 
        name: 'stuff2', 
        description: 'Im selling my book collection for a penny' ,
        price: 1,
        tags: ['relax', 'books'],
        phone: '+421444444444',
        email: 'csilla@test.com',
        seller_name: 'Csilla'
    },
    { 
        id: 14, 
        url: booksImg,
        alt: 'books', 
        name: 'stuff3', 
        description: 'Im selling my book collection for a penny' ,
        price: 1,
        tags: ['relax', 'books'],
        phone: '+421444444444',
        email: 'csilla@test.com',
        seller_name: 'Csilla'
    },
  ];
  
  const uniqueTags = ['all', ...new Set(products.flatMap(product => product.tags))];

  const filteredProducts = selectedTag === 'all' 
    ? products 
    : products.filter(product => product.tags.includes(selectedTag));

  const { paginatedData, totalPages, currentPage } = usePagination({
    data: filteredProducts,
    itemsPerPage: 2,
    currentPage: pageParam
  });

  const handleTagChange = (e) => {
    const newTag = e.target.value;
    startTransition(() => {
      setSearchParams({ tag: newTag, page: '1' });
    })
  }

  const goToPage = (page) => {
    startTransition(() => {
      setSearchParams({ tag: selectedTag, page: String(page) })
    })
  }

  return (
    <div className='page page--product-list'>
      <div className="product-list">
        <div className="product-list__header">
          <select 
            id="tag-filter"
            value={selectedTag}
            onChange={handleTagChange}
            className="tag-select"
            >
            {uniqueTags.map(tag => (
              <option key={tag} value={tag}>
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div className="product-list__container">
          {paginatedData.map((product) => (
            <Link 
              to={`/product/${product.id}`} 
              key={product.id}
              state={{ product }}
            >
              <ProductCard 
                id={product.id}
                url={product.url}
                alt={product.alt}
                name={product.name}
                price={product.price}
                tags={product.tags}
              />
            </Link>
          ))}
        </div>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onChange={goToPage}
          isPending={isPending}
        />
      </div>
      < Navigation variant="vertical" />
    </div>
  )
}

export default Productlist
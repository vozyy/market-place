import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import BackButton from '../components/BackButton'
import '../pages/Productlist.scss'
import rugImg from '../assets/images/table_rug.jpg'
import plantsImg from '../assets/images/plants.jpg'
import booksImg from '../assets/images/books.jpg'
import Navigation from '../components/Navigation'

function Productlist() {

  const [selectedTag, setSelectedTag] = useState('all');

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
    }
  ];
  
  // Get unique tags from all products
  const uniqueTags = ['all', ...new Set(products.flatMap(product => product.tags))];

  // Filter products based on selected tag
  const filteredProducts = selectedTag === 'all' 
    ? products 
    : products.filter(product => product.tags.includes(selectedTag));


  return (
    <div className='page page--product-list'>
      <div className="product-list">
        <div className="product-list__header">
          <select 
            id="tag-filter"
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
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
          {filteredProducts.map((product) => (
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
      </div>
      < Navigation variant="vertical" />
    </div>
  )
}

export default Productlist
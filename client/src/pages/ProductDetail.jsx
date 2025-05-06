import React, { useState } from 'react'
import { useParams, useLocation } from 'react-router-dom';
import BackButton from '@shared/components/BackButton'
import './ProductDetail.scss'

function ProductDetail() {

    // not using the ID yet
    const { id } = useParams();
    // now the state is being sned when the user uses the link tag to navigate to the product Detail Page,
    // need a fallback for cases if the user gets here from lets say a bookmark
    const { state } = useLocation();

    // not using the setter yet
    const [product, setProduct] = useState(state.product);

  return (
    <div className="product-detail">
      <img src={product.url} alt={product.alt} className='product-image'/>
      < BackButton variant="overlay" />
      <div className='product-detail__text'>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <strong>{product.price}€</strong>
        <div className='action-button'>
          <button>buy</button>
        </div>
        <div className='seller-detail'>
          <p>seller details:</p>
          {/* img will be added after profiles will be available */}
          <span>img</span>
          <span>{product.seller_name}</span>
          <a href={`tel:${product.phone}`}>
            {product.phone}
          </a>
          <a href={`mailto:${product.email}`}>
            {product.email}
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
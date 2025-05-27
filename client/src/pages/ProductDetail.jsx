import { useState, useContext } from 'react'
import { useLocation, Link } from 'react-router-dom';
import BackButton from '@shared/components/BackButton'
import './ProductDetail.scss'
import { ListContext } from '../features/list/context/listContext';

function ProductDetail() {
    
  const { state } = useLocation();

  // not using the setter yet
  const [product, setProduct] = useState(state.product);
  const { listItems, setListItems } = useContext(ListContext);

  const inList = listItems.some(item => item.id == product.id)

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
          <button
            disabled={inList}
            onClick={ () => {
              setListItems(prevItems => [...prevItems, product])
            }}
          >
            save to "myList"
          </button>
        </div>
        <div className='seller-detail'>
          <p>seller details:</p>
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
      {
        listItems.length > 0 && 
        <div className='product-detail__list'>
          <Link
            to={`/list`} 
          >
            <div className='count-wrapper'>
              <span className='count'>{listItems.length}</span>
            </div>
          </Link>
      </div>
      }
    </div>
  )
}

export default ProductDetail
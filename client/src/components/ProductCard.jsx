import React from 'react'
import '../components/ProductCard.scss'

function ProductCard(props) {
  return (
    <>
        <div key={props.id} className='product-card'>
            <div className='product-card__image'>
                <img src={props.url} alt={props.alt} />
            </div>
            <div className='product-card__text'>
                <div>
                    <h3>{props.name}</h3>
                    <span>{props.price}€</span>
                </div>
                <div className='tags'>
                {props.tags && props.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductCard
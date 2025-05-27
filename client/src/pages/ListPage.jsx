import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { ListContext } from '../features/list/context/listContext';
import './ListPage.scss';


function ListPage() {
    const { listItems, setListItems } = useContext(ListContext);
    // alt, description, email, id, name, phone, price, seller_name, tags, url

    console.log(listItems);
  return (
    <div className='list'>
        {listItems.map((item) => (
            <Link
                to={`/product/${item.id}`}
            >
                <div className='list--card' key={item.id}>
                        {item.name}
                </div>
            </Link>
        ))}
    </div>
  )
}

export default ListPage
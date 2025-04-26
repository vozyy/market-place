import React from 'react'
import './HomePage.scss'
import { Link } from 'react-router-dom';

function HomePage() {

    const carouselItems = [
        { id: 12, url: 'src/assets/images/table_rug.jpg', alt: 'table_rug' },
        { id: 10, url: 'src/assets/images/plants.jpg', alt: 'plants' },
        { id: 1, url: 'src/assets/images/books.jpg', alt: 'books' },
        // { id: 7, url: 'src/assets/images/chair.jpg', alt: 'chair' },
        // { id: 4, url: 'src/assets/images/boots_2.jpg', alt: 'boots' },
        // { id: 6, url: 'src/assets/images/camera.jpg', alt: 'camera' },
        // { id: 11, url: 'src/assets/images/table.jpg', alt: 'table' },
        // { id: 9, url: 'src/assets/images/lamp_2.jpg', alt: 'lamp' },
        // { id: 8, url: 'src/assets/images/glasses.jpg', alt: 'glasses' },
    ];

  return (
    <div className='homepage'>
        <header className="homepage__header">
            <h1>
                Visit <span>The marketplace.</span>
            </h1>
            <Link to="/productlist">
                <button type="button">
                    See whats new
                </button>
            </Link>
        </header>
        <div className="homepage__collage">
            {carouselItems.map((image) => (
                <img 
                    className="homepage__collage-item"
                    src={image.url}
                    alt={image.alt}
                    loading="lazy"
                    width="300"
                    height="170"
                />
            ))}
        </div>
    </div>
  )
}

export default HomePage
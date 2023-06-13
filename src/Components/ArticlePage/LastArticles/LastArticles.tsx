import React from 'react';
import { Link } from 'react-router-dom';

import './LastArticles.css';

//Fake Data
const articlesData = [
    { id: 1, title: "کتاب یادگیری بوت استرپ ", imgUrl: "https://www.mindinventory.com/blog/wp-content/uploads/2018/07/reactjs-gained.jpg" },
    { id: 2, title: "کتاب یادگیری بوت استرپ  ", imgUrl: "https://www.mindinventory.com/blog/wp-content/uploads/2018/07/reactjs-gained.jpg" },
    { id: 4, title: "کتاب یادگیری بوت استرپ ری بوت استرپ  ", imgUrl: "https://www.mindinventory.com/blog/wp-content/uploads/2018/07/reactjs-gained.jpg" },
    { id: 5, title: "کتاب یادگیری بوت استرپ  ", imgUrl: "https://www.mindinventory.com/blog/wp-content/uploads/2018/07/reactjs-gained.jpg" },
    { id: 6, title: "کتاب یادگیری بوت استرپ  ", imgUrl: "https://www.mindinventory.com/blog/wp-content/uploads/2018/07/reactjs-gained.jpg" },
]

function LastArticles() {
    return (
        <div className='lastArticles-wrapper'>
            <p>آخرین مقالات</p>
            {
                articlesData.map(item => (
                    <Link to={`/articles/${item.id}`}>
                        <div className='lastArticles-item'>
                            <img src={item.imgUrl} alt="" />
                            <p>{item.title}</p>
                        </div>
                    </Link>
                ))
            }
        </div>

    )
}

export default LastArticles;
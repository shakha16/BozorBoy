import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const products = {
    fish:[
        {
            title: "Море продуктов",
            name: "Рыба",
            price: 10,
            image: "https://png.klev.club/uploads/posts/2024-04/png-klev-club-g2sd-p-moreprodukti-png-13.png",
        },
        // {
        //     title: "Мясное",
        //     name: "Мясо",
        //     price: 10,
        //     image: "https://274418.selcdn.ru/cv08300-33250f0d-0664-43fc-9dbf-9d89738d114e/uploads/451755/743a46d3-c592-4999-8b84-969d26aa9677.png",
        // },
    ],
    meat: [
        // {
        //     title: "Море продуктов",
        //     price: 10,
        //     image: "https://png.klev.club/uploads/posts/2024-04/png-klev-club-g2sd-p-moreprodukti-png-13.png",
        // },
        {
            title: "Мясное",
            name: "Мясо",
            price: 10,
            image: "https://274418.selcdn.ru/cv08300-33250f0d-0664-43fc-9dbf-9d89738d114e/uploads/451755/743a46d3-c592-4999-8b84-969d26aa9677.png",
        },
    ]
}


const Home = () => {
    // Состояние для поиска
    const [searchQuery, setSearchQuery] = useState('');

    // Фильтрация продуктов по названию (case-insensitive)
    const filteredProducts = Object.keys(products).reduce((acc, category) => {
        acc[category] = products[category].filter(product =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return acc;
    }, {});

    return (
        <div className='p-2'>
            {/* Поле для поиска */}
            <div className="mb-4">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Поиск по категориям..."
                    className="p-2 w-full border border-gray-300 rounded-lg"
                />
            </div>

            {/* Перебор категорий продуктов */}
            {Object.keys(filteredProducts).map((category) => (
                filteredProducts[category].length > 0 && (
                    <div key={category}>
                        {filteredProducts[category].map((product, index) => (
                            <Link key={index} to={`/product/${category}`} className="w-full flex items-center bg-green-900 rounded-lg p-2 mb-2">
                                <img src={product.image} alt={product.title} className="w-20 h-20 object-cover rounded-lg" />
                                <div className="ml-4 text-2xl font-semibold text-white truncate">
                                    {product.title}
                                </div>
                            </Link>
                        ))}
                    </div>
                )
            ))}
            {/* {Object.keys(filteredProducts).map((category) => (
                filteredProducts[category].length > 0 && (
                    <div key={category}>
                        {filteredProducts[category].map((product, index) => (
                            <div key={index} className="w-full flex items-center bg-green-900 rounded-lg p-2 mb-2">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-20 h-20 object-cover rounded-lg"
                                />
                                <div className="ml-4 text-2xl font-semibold text-white truncate">
                                    {product.title}
                                </div>
                            </div>
                        ))}
                    </div>
                )
            ))} */}
        </div>
    )
}



export default Home
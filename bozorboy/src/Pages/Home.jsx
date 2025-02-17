import React, { useState } from 'react'
import { FaMinusCircle } from 'react-icons/fa';
import { FaCirclePlus } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export const products = {
    "Море продукты": [
        {
            name: "Лосось",
            price: 10,
            image: "https://png.klev.club/uploads/posts/2024-04/png-klev-club-g2sd-p-moreprodukti-png-13.png",
        },
        {
            name: "Рыба",
            price: 105,
            image: "https://png.klev.club/uploads/posts/2024-04/png-klev-club-g2sd-p-moreprodukti-png-13.png",
        },
    ],
    "Мясо": [
        {
            name: "Мясо",
            price: 10,
            image: "https://274418.selcdn.ru/cv08300-33250f0d-0664-43fc-9dbf-9d89738d114e/uploads/451755/743a46d3-c592-4999-8b84-969d26aa9677.png",
        },
    ]
}

const Home = () => {
    // Состояние для поиска
    const [searchQuery, setSearchQuery] = useState('');
    
    // Состояние для счетчиков каждого продукта
    const [counts, setCounts] = useState({});

    // Фильтрация продуктов по названию товара (case-insensitive)
    const filteredProducts = Object.keys(products).reduce((acc, category) => {
        // Фильтруем продукты внутри каждой категории
        acc[category] = products[category].filter(product =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return acc;
    }, {});

    // Увеличение счетчика для конкретного товара
    const increment = (index) => {
        setCounts(prevCounts => ({
            ...prevCounts,
            [index]: (prevCounts[index] || 0) + 1
        }));
    };

    // Уменьшение счетчика для конкретного товара
    const decrement = (index) => {
        setCounts(prevCounts => ({
            ...prevCounts,
            [index]: Math.max((prevCounts[index] || 0) - 1, 0)
        }));
    };

    return (
        <div className='p-2'>
            {/* Поле для поиска */}
            <div className="mb-4">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Поиск продуктов..."
                    className="p-2 w-full border border-gray-300 rounded-lg"
                />
            </div>

            {Object.keys(filteredProducts).map((category) => (
                filteredProducts[category].length > 0 && (
                    <div key={category} className='w-full flex flex-col gap-2 p-1'>
                        {filteredProducts[category].map((product, index) => {
                            // Локальный счетчик для каждого продукта
                            const [count, setCount] = useState(0);

                            // Увеличение счетчика
                            const increment = () => {
                                setCount(count + 1);
                            };

                            // Уменьшение счетчика
                            const decrement = () => {
                                if (count > 0) {
                                    setCount(count - 1);
                                }
                            };

                            return (
                                <div className="p-4 flex items-center bg-green-900 text-white justify-between rounded-xl" key={index}>
                                    <div className='flex items-center gap-5'>
                                        <div className='bg-white rounded-xl'>
                                            <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded-lg" />
                                        </div>
                                        <h1 className="text-2xl font-bold">{product.name}</h1>
                                    </div>
                                    <div className='flex items-center gap-5'>
                                        <p className="text-xl">{product.price}$ за кг</p>
                                        <div className='flex items-center gap-2'>
                                            <FaMinusCircle onClick={decrement} />
                                            <span className='w-[25px] overflow-hidden flex justify-end'>{count}</span>
                                            <FaCirclePlus onClick={increment} />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )
            ))}
        </div>
    );
}

export default Home;
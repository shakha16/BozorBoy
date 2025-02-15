import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { products } from './Home'
import { IoMdArrowRoundBack } from "react-icons/io";

const ProductPage = () => {
    // Извлекаем параметры из URL
    const { category } = useParams();

    // Получаем продукт из объекта данных по категории и индексу
    const product = products[category] ? products[category] : null;

    if (!product) {
        return <div>Продукт не найден</div>;
    }


    return (
        <>
            <Link to={'/'} key={category} className="p-2 mt-2 text-lg flex items-center gap-2"><IoMdArrowRoundBack /> {product.map((item) => (item.title))}</Link>
            {product.map((item) => (
                <div>
                    <div className="p-4" key={category}>
                        <h1 className="text-3xl font-bold text-gray-700">{item.name}</h1>
                        <img src={item.image} alt={item.title} className="w-40 h-40 object-cover rounded-lg" />
                        <p className="mt-4 text-xl">Цена: {item.price}$</p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ProductPage;

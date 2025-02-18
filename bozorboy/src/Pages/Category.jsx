import React, { Component } from 'react'
import { products } from './Home'
import { Link } from 'react-router-dom';

const Category = () => {
    console.log(Object.keys(products));


    return (
        <div>
            <div className="p-6">
                <h1 className="text-3xl font-bold text-center mb-6">Категории товаров</h1>
                <div className="grid grid-cols-2 gap-4">
                    {Object.keys(products).map((category) => (
                        <Link key={category} to={`/product/${encodeURIComponent(category)}`} className="p-4 bg-green-900 text-white rounded-lg text-center hover:bg-blue-400">
                            <img src={category.image} alt="" />
                            {category}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Category;
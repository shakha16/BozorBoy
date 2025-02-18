// import React, { useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { products } from './Home'
// import { IoMdArrowRoundBack } from "react-icons/io";
// import { FaCirclePlus } from "react-icons/fa6";
// import { FaMinusCircle } from "react-icons/fa";

// const ProductPage = () => {
//     // Извлекаем параметры из URL
//     const { category } = useParams();
//     const [count, setCount] = useState(0);

//     // Получаем продукт из объекта данных по категории и индексу
//     const product = products[category] ? products[category] : null;

//     if (!product) {
//         return <div>Продукт не найден</div>;
//     }

//     // Функция для увеличения счетчика
//     const increment = () => {
//         setCount(count + 1);
//     };

//     // Функция для уменьшения счетчика
//     const decrement = () => {
//         if (count > 0) {
//             setCount(count - 1);
//         }
//     };


//     return (
//         <>
//             <Link to={'/'} key={category} className="p-2 mt-2 text-lg flex items-center gap-2"><IoMdArrowRoundBack /> {category}</Link>
//             {product.map((item) => (
//                 <div className='w-full p-2'>
//                     <div className="p-4 flex items-center bg-green-900 text-white justify-between rounded-xl" key={category}>
//                         <div className='flex items-center gap-5'>
//                             <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-lg" />
//                             <h1 className="text-2xl font-bold">{item.name}</h1>
//                         </div>
//                         <div className='flex items-center gap-5'>
//                             <p className="text-xl">{item.price}$ за кг</p>
//                             <div className='flex items-center gap-2'>
//                                 <FaMinusCircle onClick={decrement} />
//                                 <span className='w-[25px] overflow-hidden flex justify-end'>{count}</span>
//                                 <FaCirclePlus onClick={increment} />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </>
//     );
// };



// export default ProductPage;


import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { products } from './Home';
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaCirclePlus } from "react-icons/fa6";
import { FaMinusCircle } from "react-icons/fa";

// ProductPage component
const ProductPage = () => {
    const { category } = useParams();  // Get category from URL params
    const [count, setCount] = useState(0);

    // Decode the category from the URL
    const categoryProducts = products[decodeURIComponent(category)] || [];  // Decode URL parameter

    if (!categoryProducts.length) {
        return <div>Продукты не найдены для этой категории.</div>;
    }

    // Handle count change
    const increment = () => setCount(count + 1);
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <>
            <Link to="/" className="p-2 mt-2 text-lg flex items-center gap-2">
                <IoMdArrowRoundBack /> {decodeURIComponent(category)}
            </Link>

            {categoryProducts.map((item, index) => (
                <div className="w-full p-2" key={index}>
                    <div className="p-4 flex items-center bg-green-900 text-white justify-between rounded-xl">
                        <div className="flex items-center gap-5">
                            <img src={item.image || "default-image.png"} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                            <h1 className="text-2xl font-bold">{item.name}</h1>
                        </div>
                        <div className="flex items-center gap-5">
                            <p className="text-xl">{item.price}$ за кг</p>
                            <div className="flex items-center gap-2">
                                <FaMinusCircle onClick={decrement} />
                                <span className="w-[25px] overflow-hidden flex justify-end">{count}</span>
                                <FaCirclePlus onClick={increment} />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ProductPage;


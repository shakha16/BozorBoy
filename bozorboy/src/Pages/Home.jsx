import React, { useContext, useState } from 'react';
import { FaMinusCircle } from 'react-icons/fa';
import { FaCirclePlus } from 'react-icons/fa6';
import { context } from '../Layout/Layout';

export const products = {
    "Морепродукты": [
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
        {
            name: "Масленная горбуша",
            price: 10,
            image: "",
        },
        {
            name: "Осетрина",
            price: 10,
            image: "",
        },
        {
            name: "Икра красная",
            price: 10,
            image: "",
        },
        {
            name: "Икра осетровая",
            price: 10,
            image: "",
        },
        {
            name: "Креветки",
            price: 10,
            image: "",
        },
        {
            name: "Раки",
            price: 10,
            image: "",
        },
    ],
    "Мясо": [
        {
            name: "Вырезка",
            price: 10,
            image: "https://274418.selcdn.ru/cv08300-33250f0d-0664-43fc-9dbf-9d89738d114e/uploads/451755/743a46d3-c592-4999-8b84-969d26aa9677.png",
        },
        {
            name: "Мясо",
            price: 10,
            image: "https://274418.selcdn.ru/cv08300-33250f0d-0664-43fc-9dbf-9d89738d114e/uploads/451755/743a46d3-c592-4999-8b84-969d26aa9677.png",
        },
    ],
    "Колбасные изделия": [
        {
            name: "Колбаса",
            price: 20,
            image: "https://example.com/image.jpg",
        },
    ],
};

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const { cartF, setCartF } = useContext(context);

    // Фильтрация продуктов по названию товара (case-insensitive)
    const filteredProducts = Object.keys(products).reduce((acc, category) => {
        const filteredCategory = products[category].filter(product =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        // Only add the category if it has any products left after filtering
        if (filteredCategory.length > 0) {
            acc[category] = filteredCategory;
        }
        return acc;
    }, {});

    // Create a state for counts outside of the loop to avoid re-rendering issues
    const [counts, setCounts] = useState({});

    const increment = (productName) => {
        setCounts(prevCounts => ({
            ...prevCounts,
            [productName]: (prevCounts[productName] || 0) + 1,
        }));
        setCartF(true);
    };

    const decrement = (productName) => {
        setCounts(prevCounts => {
            const newCount = (prevCounts[productName] || 0) - 1;
            if (newCount <= 0) {
                setCartF(false);
            }
            return {
                ...prevCounts,
                [productName]: Math.max(0, newCount),
            };
        });
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
                <div key={category} className='w-full flex flex-col gap-2 p-1'>
                    <h2 className="text-2xl font-bold mb-2">{category}</h2>
                    {filteredProducts[category].map((product) => {
                        const count = counts[product.name] || 0;

                        return (
                            <div className="p-4 flex items-center bg-green-900 text-white justify-between rounded-xl" key={product.name}>
                                <div className='flex items-center gap-5'>
                                    <div className='bg-white rounded-xl'>
                                        <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded-lg" />
                                    </div>
                                    <h1 className="text-xl font-bold">{product.name}</h1>
                                </div>
                                <div className='flex items-center gap-5'>
                                    <p className="text-xl">{product.price}$ за кг</p>
                                    <div className='flex items-center gap-2'>
                                        <FaMinusCircle onClick={() => decrement(product.name)} />
                                        <span className='w-[25px] overflow-hidden flex justify-end'>{count}</span>
                                        <FaCirclePlus onClick={() => increment(product.name)} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

export default Home;



// import React, { useContext, useState } from 'react';
// import { context } from '../Layout/Layout';
// import { Link } from 'react-router-dom';

// export const products = {
//     "Морепродукты": [
//         {
//             name: "Лосось",
//             price: 10,
//             image: "https://png.klev.club/uploads/posts/2024-04/png-klev-club-g2sd-p-moreprodukti-png-13.png",
//         },
//         {
//             name: "Рыба",
//             price: 105,
//             image: "https://png.klev.club/uploads/posts/2024-04/png-klev-club-g2sd-p-moreprodukti-png-13.png",
//         },
//         {
//             name: "Масленная горбуша",
//             price: 10,
//             image: "",
//         },
//         {
//             name: "Осетрина",
//             price: 10,
//             image: "",
//         },
//         {
//             name: "Икра красная",
//             price: 10,
//             image: "",
//         },
//         {
//             name: "Икра осетровая",
//             price: 10,
//             image: "",
//         },
//         {
//             name: "Креветки",
//             price: 10,
//             image: "",
//         },
//         {
//             name: "Раки",
//             price: 10,
//             image: "",
//         },
//     ],
//     "Мясо": [
//         {
//             name: "Мясо",
//             price: 10,
//             image: "https://274418.selcdn.ru/cv08300-33250f0d-0664-43fc-9dbf-9d89738d114e/uploads/451755/743a46d3-c592-4999-8b84-969d26aa9677.png",
//         },
//     ],
//     "Колбасные изделия": [
//         {
//             name: "Колбаса",
//             price: 20,
//             image: "https://example.com/image.jpg",
//         },
//     ],
// };

// const categoryImages = {
//     "Морепродукты": "https://png.klev.club/uploads/posts/2024-04/png-klev-club-g2sd-p-moreprodukti-png-13.png",
//     "Мясо": "https://274418.selcdn.ru/cv08300-33250f0d-0664-43fc-9dbf-9d89738d114e/uploads/451755/743a46d3-c592-4999-8b84-969d26aa9677.png",
//     "Колбасные изделия": "https://274418.selcdn.ru/cv08300-33250f0d-0664-43fc-9dbf-9d89738d114e/uploads/451755/743a46d3-c592-4999-8b84-969d26aa9677.png",
// };

// const Home = () => {
//     const [searchQuery, setSearchQuery] = useState('');
//     const { cartF, setCartF } = useContext(context);

//     // Фильтрация продуктов по названию товара (case-insensitive)
//     const filteredCategories = Object.keys(products).reduce((acc, category) => {
//         const filteredCategory = products[category].filter(product =>
//             product.name.toLowerCase().includes(searchQuery.toLowerCase())
//         );

//         // If the category has any products that match the search query, add it to the result
//         if (filteredCategory.length > 0) {
//             acc[category] = filteredCategory;
//         }
//         return acc;
//     }, {});

//     return (
//         <div className='p-2'>
//             {/* Поле для поиска */}
//             <div className="mb-4">
//                 <input
//                     type="text"
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     placeholder="Поиск продуктов..."
//                     className="p-2 w-full border border-gray-300 rounded-lg"
//                 />
//             </div>

//             {/* Рендерим только категории, которые содержат хотя бы один продукт, подходящий под запрос */}
//             {Object.keys(filteredCategories).length > 0 ? (
//                 <div className="flex flex-col gap-2">
//                     {Object.keys(filteredCategories).map((category) => (
//                         <Link to={`/product-${encodeURIComponent(category)}`} key={category} className="p-2 border rounded-lg flex items-center gap-4">
//                             <img
//                                 src={categoryImages[category]}
//                                 alt={category}
//                                 className="w-12 h-12 object-cover rounded-lg"
//                             />
//                             <h2 className="text-2xl font-bold">{category}</h2>
//                         </Link>
//                     ))}
//                 </div>
//             ) : (
//                 <p className="text-lg text-center">Нет категорий, соответствующих запросу.</p>
//             )}
//         </div>
//     );
// };

// export default Home;

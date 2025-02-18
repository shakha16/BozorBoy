// import { useState } from 'react';
// import React from 'react';
// import Layout from './Layout/Layout';
// import { Route, Routes } from 'react-router-dom';
// import Home from './Pages/Home';
// import ProductPage from './Pages/ProductPage';
// import Category from './Pages/Category';

// function App() {

//     return (
//         <Routes>
//             <Route path="/" element={<Layout />}>
//                 <Route index element={<Home/>} />
//                 <Route path="/product-:category" element={<ProductPage/>} />
//                 <Route path="category" element={<Category/>} />
//                 <Route path="*" element={<p>Path not resolved</p>} />
//             </Route>
//         </Routes>
//     );
// }

// export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Pages/Home';
import ProductPage from './Pages/ProductPage';
import Category from './Pages/Category';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                {/* Correct route for dynamic category */}
                <Route path="product/:category" element={<ProductPage />} />
                <Route path="category" element={<Category />} />
                {/* Fallback for unmatched routes */}
                <Route path="*" element={<p>Path not resolved</p>} />
            </Route>
        </Routes>
    );
}

export default App;

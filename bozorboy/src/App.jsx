// import { useState } from 'react'
// import React from 'react';
// import Layout from './Layout/Layout'
// import { Route, Routes } from 'react-router-dom'

// function App() {
//     const [count, setCount] = useState(0)

//     return (
//         <Routes>
//             <Route path="/" element={<Layout />}>
//                 <Route index element={<center>Home</center>} />
//                 <Route path="*" element={<p>Path not resolved</p>} />
//                 <Route path="/about" element={<p>xxx</p>} />
//             </Route>
//         </Routes>
//     )
// }

// export default App

import { useState } from 'react';
import React from 'react';
import Layout from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ProductPage from './Pages/ProductPage';

function App() {

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home/>} />
                <Route path="product/:category" element={<ProductPage/>} />
                <Route path="*" element={<p>Path not resolved</p>} />
            </Route>
        </Routes>
    );
}

export default App;
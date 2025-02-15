import React, { useState, useEffect, useRef } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";


const Layout = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRef.current && !menuRef.current.contains(event.target) &&
                buttonRef.current && !buttonRef.current.contains(event.target)
            ) {
                setMenuOpen(false);
            }
        };

        // Добавляем слушатель события
        document.addEventListener('mousedown', handleClickOutside);

        // Удаляем слушатель при размонтировании компонента
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <header className="bg-green-900 p-4">
                <div className="flex items-center justify-between">
                    {/* Логотип */}
                    <div className="text-white font-bold text-lg">
                        Bozor Boy
                    </div>

                    {/* Кнопка бургер-меню */}
                    <button
                        ref={buttonRef}
                        className="lg:hidden text-white focus:outline-none"
                        onClick={toggleMenu}
                    >
                        {/* Иконка бургер-меню */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                {/* Меню на мобильных устройствах с анимацией */}
                <div
                    ref={menuRef}
                    className={`lg:hidden mt-4 fixed top-0 right-0 w-2/3 h-full bg-green-900 transition-transform duration-300 ease-in-out ${menuOpen ? 'transform translate-x-0' : 'transform translate-x-full'
                        }`}
                >
                    <ul className="space-y-4 p-4">
                        <li>
                            <Link to="/" className="text-white text-lg flex items-center gap-2">
                                <FaHome /> Главная
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-white text-lg flex items-center gap-2">
                                <FaShoppingBasket /> Корзина
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-white text-lg flex items-center gap-2">
                                <IoMdContact /> Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Layout;
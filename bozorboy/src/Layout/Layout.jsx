import React from 'react';


const Layout = (props) => {
    return (
        <>
            <header>
                header
            </header>
            <main>
                {props.children}
            </main>
            <footer>
                footer
            </footer>
        </>
    );
}
export default Layout;
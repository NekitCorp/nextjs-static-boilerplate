import React from 'react';
import css from './Layout.module.css';

const Layout: React.FC = ({ children }) => {
    return (
        <div className={css.container}>
            <header className={css.header}>Header</header>
            <main className={css.main}>{children}</main>
            <footer className={css.footer}>Footer</footer>
        </div>
    );
};

export default Layout;

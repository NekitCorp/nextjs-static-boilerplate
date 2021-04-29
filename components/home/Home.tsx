import Link from 'next/link';
import React from 'react';
import css from './Home.module.css';

type IHomeProps = {
    articleNames: string[];
};

const Home: React.FC<IHomeProps> = ({ articleNames }) => {
    return (
        <div>
            <h1>Articles</h1>
            <ul className={css.list}>
                {articleNames.map(name => (
                    <li key={name}>
                        <Link href={`/article/${name}`}>
                            <a>{name}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;

import Link from 'next/link';
import React from 'react';
import css from './Article.module.css';

type IArticleProps = {
    html: string;
};

const Article: React.FC<IArticleProps> = ({ html }) => {
    return (
        <section>
            <Link href="/">
                <a>Back</a>
            </Link>
            <div className={css.content} dangerouslySetInnerHTML={{ __html: html }} />
        </section>
    );
};

export default Article;

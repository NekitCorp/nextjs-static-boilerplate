import { promises as fs } from 'fs';
import marked from 'marked';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import path from 'path';
import React from 'react';
import Article from '../../components/article/Article';
import Layout from '../../components/layout/Layout';

type Params = {
    id: string;
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const articlesDirectory = path.join(process.cwd(), './articles');
    const filenames = await fs.readdir(articlesDirectory);

    return {
        paths: filenames.map(filename => {
            return {
                params: {
                    id: path.parse(filename).name,
                },
            };
        }),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<IArticlePageProps, Params> = async ({ params }) => {
    const articlesDirectory = path.join(process.cwd(), './articles');
    const filePath = path.join(articlesDirectory, `${params?.id}.md`);
    const fileContent = await fs.readFile(filePath, 'utf8');
    const html = marked(fileContent);

    return {
        props: {
            html,
        },
    };
};

type IArticlePageProps = {
    html: string;
};

const ArticlePage: NextPage<IArticlePageProps> = ({ html }) => {
    return (
        <Layout>
            <Article html={html} />
        </Layout>
    );
};

export default ArticlePage;

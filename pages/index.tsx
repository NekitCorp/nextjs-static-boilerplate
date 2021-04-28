import { promises as fs } from 'fs';
import { GetStaticProps, NextPage } from 'next';
import path from 'path';
import React from 'react';
import Home from '../components/home/Home';
import Layout from '../components/layout/Layout';

export const getStaticProps: GetStaticProps<IHomePageProps> = async () => {
    const articlesDirectory = path.join(process.cwd(), './articles');
    const filenames = await fs.readdir(articlesDirectory);

    return {
        props: {
            articleNames: filenames.map(filename => path.parse(filename).name),
        },
    };
};

export type IHomePageProps = {
    articleNames: string[];
};

const HomePage: NextPage<IHomePageProps> = ({ articleNames }) => {
    return (
        <Layout>
            <Home articleNames={articleNames} />
        </Layout>
    );
};

export default HomePage;

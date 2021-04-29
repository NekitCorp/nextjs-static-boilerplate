# nextjs-static-boilerplate

Next.js [Static HTML Export](https://nextjs.org/docs/advanced-features/static-html-export), which can be run standalone without the need of a Node.js server.

[Demo](https://nekitcorp.github.io/nextjs-static-boilerplate/)

Features:

-   Generate content from markdown
-   Linting
-   TypeScript
-   Automatic generation `sitemap.xml` and `robots.txt`

## Output

[gh-pages branch](/nekitcorp/nextjs-static-boilerplate/tree/gh-pages)

```
/
├── _next
│ └── ...
├── article
│ ├── article-1.html
│ ├── article-2.html
│ └── article-3.html
├── 404.html
├── favicon.ico
├── index.html
├── robots.txt
└── sitemap.xml
```

## Commands

| Command       | Description                                                                      |
| ------------- | -------------------------------------------------------------------------------- |
| `yarn dev`    | Start the development server on [http://localhost:3000/](http://localhost:3000/) |
| `yarn build`  | Build the application for production usage                                       |
| `yarn export` | Export app to static HTML in the `out` directory                                 |

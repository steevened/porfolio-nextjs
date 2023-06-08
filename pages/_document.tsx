import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="text-gray-900 bg-fixed bg-gray-100 dark:text-gray-400 dark:bg-black base-font dark:bg-dark bg-light">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

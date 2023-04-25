import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-fixed text-blue-gray-700 dark:text-blue-gray-200 dark:bg-black base-font dark:bg-dark bg-light">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

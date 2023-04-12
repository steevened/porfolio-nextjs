import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-fixed bg-gray-100 text-slate-700 dark:text-gray-200 dark:bg-black base-font dark:bg-dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

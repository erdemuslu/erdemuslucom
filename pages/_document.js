import Document, { Html, Head, Main, NextScript } from 'next/document';
import _JSXStyle from 'styled-jsx/style';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <meta name="description" content="Web ve mobil uygulama geliştiricisi" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  };
};

export default MyDocument;

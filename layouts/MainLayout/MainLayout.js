import Head from 'next/head';
import GlobalStyle from '../../styles/GlobalStyle';
import MainLayoutStyle from './MainLayoutStyle';

const Layout = ({children}) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>Erdem Uslu</title>
        <meta name="description" content="Web ve mobil uygulama geliştiricisi" />
      </Head>
      <div className="main-layout">
        {children}
        <style jsx global>
          {GlobalStyle}
        </style>
        <style jsx>
          {MainLayoutStyle}
        </style>
      </div>
    </>
  );
};

Layout.defaultProps = {
  children: null,
};

export default Layout;

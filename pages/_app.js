import { ThemeProvider } from "../contexts/ThemeContext";
import Head from 'next/head';
import {Container} from '../components';

const MyApp = ({ Component }) => {
  return (
    <>
      <ThemeProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Erdem Uslu</title>
        </Head>
        <Container>
          <Component />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default MyApp;

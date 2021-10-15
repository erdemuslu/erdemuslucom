import GlobalStyle from '../../styles/GlobalStyle';
import MainLayoutStyle from './MainLayoutStyle';
import { Header, PageWithAnimation } from '../../components';
import { useContext } from 'react';
import _JSXStyle from 'styled-jsx/style';
import { ThemeContext } from '../../contexts/ThemeContext';

const MainLayout = ({children}) => {
  const {state} = useContext(ThemeContext);

  return (
    <PageWithAnimation>
      <div className="main-layout">
        <Header />
        {children}
        <style jsx global>
          {GlobalStyle}
        </style>
        <style jsx>
          {MainLayoutStyle}
        </style>
      </div>
    </PageWithAnimation>
  );
};

MainLayout.defaultProps = {
  children: null,
};

export default MainLayout;

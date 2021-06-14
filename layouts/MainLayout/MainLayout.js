import GlobalStyle from '../../styles/GlobalStyle';
import MainLayoutStyle from './MainLayoutStyle';
import Header from '../../components/Header';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const MainLayout = ({children}) => {
  const {state} = useContext(ThemeContext);
  return (
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
  );
};

MainLayout.defaultProps = {
  children: null,
};

export default MainLayout;

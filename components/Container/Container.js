import _JSXStyle from 'styled-jsx/style';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const Container = ({ children }) => {
  const {state, dispatch} = useContext(ThemeContext);

  useEffect(() => {
    if (window) {
      dispatch({
        type: 'UPDATE_THEME',
        payload: window?.localStorage?.getItem?.('theme-eu') || 'dark',
      })
    }
  }, []);

  return (
    <div className={`container is-${state.theme}`}>
      {children}
      <style jsx>{`
        div {
          width: 100%;
          min-height: 100%;
        }
      `}</style>
    </div>
  )
};

export default Container;

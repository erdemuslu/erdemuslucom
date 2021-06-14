import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import Title from '../Title';

const Header = () => {
  const {state, dispatch} = useContext(ThemeContext);

  const updateTheme = (theme) => {
    window?.localStorage?.setItem?.('theme-eu', theme);

    dispatch({
      type: 'UPDATE_THEME',
      payload: theme
    });
  };

  return (
    <header className="header">
      <div className="header-left">
        <Title content="Erdem Uslu" />
        <p>Yazılım Geliştiricisi</p>
      </div>
      <div className="header-right">
        {
          [
            {
              text: '10:00',
              value: 'light',
            },
            {
              text: '20:00',
              value: 'dark',
            },
          ].map((item, index) => {
            return (
              <button
                key={index.toString()}
                onClick={() => updateTheme(item.value)}
                className={state.theme === item.value ? 'is-active' : ''}
                disabled={state.theme === item.value}
              >
                {item.text}
              </button>
            )
          })
        }
      </div>
      <style jsx>{`
        .header {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: flex-start;
          width: 100%;
        }

        .header-left p {
          font-size: 1em;
          color: var(--second-color-300);
        }

        .header-right button {
          background-color: transparent;
          color: var(--second-color-100);
          font-family: var(--second-font);
          font-size: 1.125em;
          opacity: .5;
        }

        .header-right button.is-active {
          opacity: 1;
        }

        .header-right button:first-of-type {
          margin-right: 1em;
        }
      `}</style>
    </header>
  );
};

export default Header;

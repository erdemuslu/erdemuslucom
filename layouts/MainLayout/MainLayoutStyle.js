import css from 'styled-jsx/css';

export default css`
  .main-layout {
    display: flex;
    padding: 5em 6.25em;
  }

  @media screen and (max-width: 50em) {
    .main-layout {
      padding: 1em;
    }
  }
`;

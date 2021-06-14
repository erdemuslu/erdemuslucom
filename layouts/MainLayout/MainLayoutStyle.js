import css from 'styled-jsx/css';

export default css`
  .main-layout {
    display: flex;
    flex-wrap: wrap;
    padding: 5em 0;
    width: calc(100% - 4em);
    max-width: 62em;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width: 50em) {
    .main-layout {
      padding: 1em;
    }
  }
`;

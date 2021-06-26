import css from 'styled-jsx/css';

export default css.global`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  #__next {
    height: 100%;
  }

  .container {
    background-color: var(--main-color);
    color: var(--second-color-100);
    font-size: 16px;
    font-family: var(--main-font);
    font-weight: 300;

    --main-font: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Oxygen, Cantarell, sans-serif;
  }

  .container.is-dark {
    --main-color: #383838;
    --second-color: #fff;
    --second-color-100: #EFF1F5;
    --second-color-200: #D0D4DC;
    --second-color-300: #9FA4AE;
    --success: #A5FFD6;
    --success-100: #11DF81;
  }

  .container.is-light {
    --main-color: #fff;
    --second-color: #383838;
    --second-color-100: #4c4c4c;
    --second-color-200: #616161;
    --second-color-300: #777676;
    --success: #A5FFD6;
    --success-100: #11DF81;
  }

  p {
    line-height: 1.5;
  }

  button {
    border: 0;
    outline: none;
    box-shadow: unset;
    cursor: pointer;
  }

  a {
    color: var(--second-color-200);
    font-size: inherit;
    font-weight: 400;
    transition: color .24s;
    text-decoration: none;
  }

  a.is-active {
    color: var(--success-100);
  }

  a:hover {
    color: var(--second-color);
    text-decoration: underline;
  }

  a.is-active:hover {
    color: var(--success);
  }
`;

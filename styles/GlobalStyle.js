import css from 'styled-jsx/css';

export default css.global`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;500&display=swap');

  :root {
    --black: #383838;
    --white: #EFF1F5;
    --white-200: #D0D4DC;
    --success: #A5FFD6;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    font-weight: 300;
  }

  body {
    background-color: var(--black);
    color: var(--white);
  }

  p {
    line-height: 1.5;
  }

  a {
    color: var(--success);
    font-size: inherit;
    font-weight: 400;
  }
`;

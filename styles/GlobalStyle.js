import css from 'styled-jsx/css';

export default css.global`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');

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
  }

  body {
    background-color: var(--black);
    color: var(--white);
  }
`;

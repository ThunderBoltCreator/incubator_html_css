import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap');

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #131131;
    font-family: 'Inter', sans-serif;
  }
`

export {GlobalStyles}
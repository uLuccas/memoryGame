import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;500;700&family=Ubuntu:wght@300;400;500;700&display=swap');
  body {
    margin: 0;
    padding: 0;
  }
  *{
    font-family: 'M PLUS Rounded 1c', sans-serif;
    ::-webkit-scrollbar{
      display: none;
    }
  }
`;

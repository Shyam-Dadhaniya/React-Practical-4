import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
 body {
  margin: 0;
  background: #F0EFE9;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

::-webkit-scrollbar{
  display: none;
}

.complete{
    color: green;
}

.not-complete{
    color: grey;
}
`;
 
export default GlobalStyle;
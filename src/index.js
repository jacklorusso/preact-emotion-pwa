import { injectGlobal } from 'emotion';

import App from './App';

injectGlobal`
  * {
    box-sizing: border-box;
  }

  html, body {
  	height: 100%;
  	width: 100%;
  	padding: 0;
  	margin: 0;
  	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  	font-weight: 400;
    color: #333;
  }
`;

export default App;

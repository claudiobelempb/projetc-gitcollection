import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { GlobalStyles } from "./assets/css/global-styles";
import { dark } from "./assets/css/themes/dark";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={dark}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

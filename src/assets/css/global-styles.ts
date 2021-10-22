import { createGlobalStyle, css } from "styled-components";

import ImgBackground from "../../assets/images/background.svg";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html, body ,#root {
  font-size: 62.5%;
  height: 100vh;
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;
  ${({ theme }) => css`
    font-family: ${theme.fonts.familys.roboto};
    background: ${theme.colors.light_100} url(${ImgBackground}) no-repeat 70%
      top;
    background-size: contain;
    color: ${theme.colors.white_100};
  `}
  @media(max-width: 1080px) {
    font-size: 93.75%; //15px
  }
  @media(max-width: 720px) {
    font-size: 87.5%; // 14px
  }
}
h1, h2, h3, h4,h5, h6 {
  ${({ theme }) => css`
    font-family: ${theme.fonts.familys.roboto};
    font-weight: 400;
  `}
}
button, a {
  cursor: pointer;
  color: inherit;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.9);
  }
}
a {
  text-decoration: none;
  display: block;
}
body, input, textarea, select, button {
  border: 0;
  /* outline: 0; */
  font-family: "Roboto", sans-serif;
  font-weight: 400;
}
ul {
  list-style: none;
}
img {
  max-width: 100%;
}
[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

.react-modal-overlay {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.react-modal-content {
  width: 100%;
  max-width: 576px;
  background-color: var(--light);
  padding: 3rem;
  position: relative;
  border-radius: 0.25rem;
}
.react-modal-close {
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border: 0;
  background-color: transparent;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.2);
  }
}
`;

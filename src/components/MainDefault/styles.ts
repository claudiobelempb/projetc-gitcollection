import styled, { css } from "styled-components";

export const MainContainer = styled.main`
  /* height: 100vh; */
  ${({ theme }) => css`
    /* height: calc(100% - 140px); */
    height: 100vh;
    margin-top: 2rem;
    /* grid-area: Main; */
    /* background: ${theme.colors.red_100}; */
    @media only screen and ${theme.medias.mx} {
      height: 100%;
    }
  `}
`;

import styled, { css } from "styled-components";

// import ImgBackground from "../../assets/images/background.svg";

export const LayoutHomeContainer = styled.div`
  height: 100vh;
  ${({ theme }) => css`
    @media only screen and ${theme.medias.mx} {
      grid-template-columns: 1fr;
    }
  `};
`;

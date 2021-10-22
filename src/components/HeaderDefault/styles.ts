import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  height: 80px;
  /* padding: 1rem 0 1rem 0; */
  ${({ theme }) => css`
    /* background: ${theme.colors.light_100}; */
    @media only screen and ${theme.medias.mx} {
      height: auto;
    }
  `}
`;

import styled, { css } from "styled-components";

export const BrandContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  ${({ theme }) => css`
    /* background: ${theme.colors.white_100}; */
    /* background-image: url('../../assets/images/dscatalog-image.svg'); */
    background-repeat: no-repeat;
    @media only screen and ${theme.medias.mx} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const ImgemBrandDefault = styled.img`
  max-width: 125px;
  height: 100%;
  font-size: 0;
  ${({ theme }) => css`
    background-repeat: no-repeat;
    @media only screen and ${theme.medias.mx} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const LinkBrandDefault = styled.a`
  font-size: 2rem;
  ${({ theme }) => css`
    color: ${theme.colors.red_100};
    background-repeat: no-repeat;
    @media only screen and ${theme.medias.mx} {
      grid-template-columns: 1fr;
    }
  `}
`;

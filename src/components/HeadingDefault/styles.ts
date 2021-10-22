import styled, { css } from "styled-components";

type HeadingProps = {
  upcase: boolean;
  iscolor: string;
};

export const HeadingH1 = styled.h1`
  position: relative;
  display: flex;
  ${({ theme }) => css<HeadingProps>`
    font-size: ${theme.fonts.sizes.lx};
    text-transform: ${(props) => (props.upcase ? "uppercase" : "none")};
    color: ${(props) =>
      props.iscolor ? props.iscolor : theme.colors.gray_100};
    @media only screen and ${theme.medias.mx} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const HeadingH2 = styled.h2`
  position: relative;
  display: flex;
  ${({ theme }) => css<HeadingProps>`
    font-size: ${theme.fonts.sizes.mx};
    text-transform: ${(props) => (props.upcase ? "uppercase" : "none")};
    color: ${(props) =>
      props.iscolor ? props.iscolor : theme.colors.gray_100};
    @media only screen and ${theme.medias.mx} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const HeadingH3 = styled.h3`
  position: relative;
  display: flex;
  ${({ theme }) => css<HeadingProps>`
    font-size: ${theme.fonts.sizes.sx};
    text-transform: ${(props) => (props.upcase ? "uppercase" : "none")};
    color: ${(props) =>
      props.iscolor ? props.iscolor : theme.colors.gray_100};
    @media only screen and ${theme.medias.mx} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const HeadingH4 = styled.h4`
  position: relative;
  display: flex;
  ${({ theme }) => css<HeadingProps>`
    font-size: ${theme.fonts.sizes.ls};
    text-transform: ${(props) => (props.upcase ? "uppercase" : "none")};
    color: ${(props) =>
      props.iscolor ? props.iscolor : theme.colors.gray_100};
    @media only screen and ${theme.medias.mx} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const HeadingH5 = styled.h5`
  position: relative;
  display: flex;
  ${({ theme }) => css<HeadingProps>`
    font-size: ${theme.fonts.sizes.ms};
    text-transform: ${(props) => (props.upcase ? "uppercase" : "none")};
    color: ${(props) =>
      props.iscolor ? props.iscolor : theme.colors.gray_100};
    @media only screen and ${theme.medias.mx} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const HeadingH6 = styled.h6`
  position: relative;
  display: flex;
  ${({ theme }) => css<HeadingProps>`
    font-size: ${theme.fonts.sizes.ss};
    text-transform: ${(props) => (props.upcase ? "uppercase" : "none")};
    color: ${(props) =>
      props.iscolor ? props.iscolor : theme.colors.gray_100};
    @media only screen and ${theme.medias.mx} {
      grid-template-columns: 1fr;
    }
  `}
`;

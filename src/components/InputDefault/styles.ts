import styled, { css } from "styled-components";

type InputProps = {
  iscolor?: string;
  isbg?: string;
  hasError?: boolean;
};

export const InputContainer = styled.div`
  position: relative;
`;

export const InputDefaultContainer = styled.input`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 3rem;
    padding-right: 2.5rem;
    padding-left: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border: 3px solid transparent;
    color: ${theme.colors.black_100};
    border-radius: 0.5rem;
    -webkit-border-radius: 0.5rem;
    -moz-border-radius: 0.5rem;
    font-size: 1rem;
    background: ${theme.colors.white_100};
    @media only screen and ${theme.medias.mx} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const InputDefaultSmall = styled(InputDefaultContainer)<InputProps>`
  ${(props) =>
    props.hasError &&
    css<InputProps>`
      border-color: #c53030;
    `}
  ${({ theme }) => css`
    /* background: ${theme.colors.white_100}; */
    @media only screen and ${theme.medias.mx} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const InputIconDefault = styled.button`
  ${({ theme }) => css<InputProps>`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: ${(props) => (props.isbg ? props.isbg : "transparent")};
    color: ${(props) => (props.iscolor ? props.iscolor : "")};
    width: 2.5rem;
    border-radius: 0 0.25rem 0.25rem 0;

    color: ${theme.colors.white_100};
    & svg {
      color: ${theme.colors.green_100};
      width: 1.3rem;
      height: 1.3rem;
    }
    @media only screen and ${theme.medias.mx} {
      grid-template-columns: 1fr;
    }
  `}
`;

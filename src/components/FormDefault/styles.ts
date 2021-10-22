import styled, { css } from "styled-components";

export const FormContainerDefault = styled.form`
  ${({ theme }) => css`
    /* display: flex;
  justify-content: center;
  align-items: center; */
    width: 100%;
    margin-top: 1rem;
    @media only screen and ${theme.medias.mx} {
      grid-template-columns: 1fr;
    }
  `}
`;

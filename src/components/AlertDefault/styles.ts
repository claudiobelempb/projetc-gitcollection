import styled, { css } from "styled-components";

export const AlertDefaultContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    /* background: ${theme.colors.white_100}; */
    /* background-image: url('../../assets/images/dscatalog-image.svg'); */
    background-repeat: no-repeat;
    @media only screen and ${theme.medias.mx} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const AlertDefaultSuccess = styled.p`
  ${({ theme }) => css`
    width: 100%;
    padding: 1rem;
    font-size: 1.2rem;
    margin-top: 1rem;
    margin-bottom: 30px;
    background-color: #accc9a;
    color: #6b7f60;
    border-radius: 0.25rem;
  `}
`;

export const AlertDefaultInfor = styled.p`
  ${({ theme }) => css`
    width: 100%;
    padding: 1rem;
    font-size: 1.2rem;
    margin-top: 1rem;
    margin-bottom: 30px;
    background-color: #9ab7cc;
    color: #60727f;
    border-radius: 0.25rem;
  `}
`;

export const AlertDefaultWarning = styled.p`
  ${({ theme }) => css`
    width: 100%;
    padding: 1rem;
    font-size: 1.2rem;
    margin-top: 1rem;
    margin-bottom: 30px;
    background-color: #c6b247;
    color: #776b2b;
    border-radius: 0.25rem;
  `}
`;

export const AlertDefaultDanger = styled.p`
  ${({ theme }) => css`
    width: 100%;
    padding: 1rem;
    font-size: 1.2rem;
    margin-top: 1rem;
    margin-bottom: 30px;
    background-color: #e69f9f;
    color: #996a6a;
    border-radius: 0.25rem;
  `}
`;

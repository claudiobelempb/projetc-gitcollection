import styled, { css } from "styled-components";

export const ListDefaultContainer = styled.section`
  ${({ theme }) => css`
    /* background: ${theme.colors.white_100}; */
    color: ${theme.colors.gray_100};
    & a {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      width: 100%;
      background-color: ${theme.colors.white_100};
      border-radius: 0.25rem;
      padding: 1rem;
      transition: transform 0.2s;

      &:hover {
        transform: translateX(6px);
      }
    }

    & img {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      margin-right: 1rem;
    }

    & svg {
      text-align: right;
    }

    @media only screen and ${theme.medias.mx} {
      grid-template-columns: 1fr;
    }
  `}
`;

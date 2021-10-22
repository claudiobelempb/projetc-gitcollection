import styled, { css } from "styled-components";

// import ImgBackground from "../../assets/images/background.svg";

export const RepositoryDefaultContainer = styled.section`
  ${({ theme }) => css`
    /* height: 100vh; */

    & img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    & ul {
      display: flex;
      align-items: center;
    }

    & li {
      & + li {
        margin-left: 8rem;
      }
    }

    & strong {
      font-size: 2.4rem;
    }

    @media only screen and ${theme.medias.mx} {
      grid-template-columns: 1fr;
    }
  `};
`;

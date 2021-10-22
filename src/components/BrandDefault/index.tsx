import { Link } from "react-router-dom";
import { BrandContainer, ImgemBrandDefault, LinkBrandDefault } from "./styles";

import ImgBrand from "../../assets/images/logo.svg";
import { ReactNode } from "react";

type BrandProps = {
  title?: ReactNode;
  href?: string;
};

export const BrandDefault: React.FC<BrandProps> = ({ title, href = "/" }) => {
  const renderBrand = () => {
    return title ? (
      <BrandContainer>
        <LinkBrandDefault href={href}>
          <h1>{title}</h1>
        </LinkBrandDefault>
      </BrandContainer>
    ) : (
      <BrandContainer>
        <Link to={href}>
          <h1>
            <ImgemBrandDefault
              src={ImgBrand}
              alt="brand"
              height={"33"}
              width={"125"}
            />
          </h1>
        </Link>
      </BrandContainer>
    );
  };

  return renderBrand();
};

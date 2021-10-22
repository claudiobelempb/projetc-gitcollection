import { ReactNode } from "react";
import { BrandDefault } from "../../components/BrandDefault";
import { MainDefault } from "../../components/MainDefault";
import { HeaderDefault } from "../../components/HeaderDefault";
import { ButtonDefault } from "../../components/ButtonDefault";

import { LayoutHomeContainer } from "./styles";
import { GridDefault } from "../../components/GridDefault";

type LayoutHomeProps = {
  children?: ReactNode;
};

const LayoutHomeDefault: React.FC<LayoutHomeProps> = ({ children }) => {
  return (
    <LayoutHomeContainer>
      <HeaderDefault>
        <GridDefault size={2}>
          <BrandDefault />
          <ButtonDefault
            onClick={() => console.log("Click")}
            type="link"
            icon
            title="Voltar"
          />
        </GridDefault>
      </HeaderDefault>
      <MainDefault>{children}</MainDefault>
    </LayoutHomeContainer>
  );
};

export { LayoutHomeDefault };

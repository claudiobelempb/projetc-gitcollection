import { ReactNode } from "react";
import { LayoutDashboardContainer } from "./styles";

type LayoutDashboardProps = {
  children: ReactNode;
  title: string;
};
const LayoutDashboardDefault: React.FC<LayoutDashboardProps> = ({
  children,
  title,
}) => {
  return (
    <LayoutDashboardContainer>
      <h1>{title}</h1>
      {children}
    </LayoutDashboardContainer>
  );
};

export { LayoutDashboardDefault };

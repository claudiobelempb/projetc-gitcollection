import { AlertDefaultContainer, AlertDefaultDanger } from "./styles";

type AlertDefaultProps = {
  title: string;
};

const AlertDefault: React.FC<AlertDefaultProps> = ({ title }) => {
  return (
    <AlertDefaultContainer>
      <AlertDefaultDanger>{title}</AlertDefaultDanger>
    </AlertDefaultContainer>
  );
};

export { AlertDefault };

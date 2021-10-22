import { ReactNode, FormEvent } from "react";
import { FormContainerDefault } from "./styles";

type FormDefaultProps = {
  children: ReactNode;
  onSubmitProps: (event: FormEvent<HTMLFormElement>) => void;
};

const FormDefault: React.FC<FormDefaultProps> = ({
  children,
  onSubmitProps,
}) => {
  return (
    <FormContainerDefault onSubmit={onSubmitProps}>
      {children}
    </FormContainerDefault>
  );
};

export { FormDefault };

import { ChangeEvent } from "react";
import { FaSearch } from "react-icons/fa";
import { InputContainer, InputDefaultSmall, InputIconDefault } from "./styles";

type ImputDefaultProps = {
  label?: string;
  placeholder: string;
  type?: "text" | "number" | "search" | "full" | "search";
  iscolor?: boolean;
  InputOnClick?: () => void;
  InputOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  icon?: boolean;
  alt?: string;
  isbgcolor?: string;
  hasError?: boolean;
};

export const InputDefault: React.FC<ImputDefaultProps> = ({
  label,
  iscolor = false,
  isbgcolor,
  type = "Text alternative",
  icon = false,
  alt,
  InputOnClick,
  InputOnChange,
  placeholder,
  hasError,
}) => {
  const isColor = iscolor ?? "color_black-500";
  const isBgColor = isbgcolor ?? "#c3c3c3";
  const renderInput = () => {
    switch (type) {
      case "search":
        return (
          <InputContainer onChange={InputOnChange}>
            <label htmlFor="">{label ?? ""}</label>
            <InputDefaultSmall
              className={`${isColor} ${type}`}
              placeholder={placeholder ?? "Digíte um placeholder"}
              type={type ?? "text"}
              alt={alt ?? "Text alternative"}
              hasError={hasError}
            />
            {icon ? (
              <InputIconDefault isbg={isBgColor} onClick={InputOnClick}>
                {/* <Image src={src} alt={alt} width={20} height={20} /> */}
                {/* <FaAlignJustify color={'red'} size={30} /> */}
                <FaSearch size={30} />
              </InputIconDefault>
            ) : (
              ""
            )}
          </InputContainer>
        );

      case "number":
        return (
          <InputContainer onChange={InputOnChange}>
            <label htmlFor="">{label ?? ""}</label>
            <InputDefaultSmall
              className={`${isColor} ${type}`}
              placeholder={placeholder ?? "Digíte um placeholder"}
              type={type ?? "number"}
              alt={alt ?? "Text alternative"}
            />
            {icon ? (
              <InputIconDefault isbg={isBgColor} onClick={InputOnClick}>
                {/* <Image src={src} alt={alt} width={20} height={20} /> */}
                {/* <FaAlignJustify color={'red'} size={30} /> */}
                <FaSearch color={"red"} size={30} />
              </InputIconDefault>
            ) : (
              ""
            )}
          </InputContainer>
        );

      default:
        return (
          <InputContainer onChange={InputOnChange}>
            <label htmlFor="">{label ?? ""}</label>
            <InputDefaultSmall
              className={`${isColor} ${type}`}
              placeholder={placeholder ?? "Digíte um placeholder"}
              type={type}
              alt={alt}
            />
            {icon ? (
              <InputIconDefault onClick={InputOnClick}>
                {/* <Image src={src} alt={alt} width={20} height={20} /> */}
                {/* <FaAlignJustify color={'red'} size={30} /> */}
                <FaSearch color={"blue"} size={30} />
              </InputIconDefault>
            ) : (
              ""
            )}
          </InputContainer>
        );
    }
  };

  return renderInput();
};

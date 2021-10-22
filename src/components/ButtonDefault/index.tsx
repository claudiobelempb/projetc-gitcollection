import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  ButtonContainerDefault,
  ButtonLarge,
  ButtonMedium,
  ButtonSmall,
  ButtonFull,
  ButtonLink,
  ButtonSearch,
  ImageButtonDefault,
} from "./styles";

type HeadingProps = {
  type?: "large" | "medium" | "small" | "full" | "search" | "link";
  color?: boolean;
  uppercase?: boolean;
  title: string;
  onClick: () => void;
  icon?: boolean;
  alt?: string;
  src?: string;
  href?: string;
};

export const ButtonDefault: React.FC<HeadingProps> = ({
  color = false,
  type = `large`,
  uppercase,
  title = "Button",
  icon = false,
  alt,
  src,
  href = "/",
  onClick,
}) => {
  const isColor = color ? color : "color_black-500";
  const isUppercase = uppercase ? `${uppercase}` : "none";
  const renderButton = () => {
    switch (type) {
      case "large":
        return (
          <ButtonContainerDefault>
            <ButtonLarge
              onClick={onClick}
              className={`${isColor} ${type} ${isUppercase}`}
            >
              {title}
              {icon ? (
                <ImageButtonDefault
                  src={src}
                  alt={alt}
                  width={60}
                  height={60}
                />
              ) : (
                ""
              )}
            </ButtonLarge>
          </ButtonContainerDefault>
        );
      case "medium":
        return (
          <ButtonMedium
            onClick={onClick}
            className={`${isColor} ${type} ${isUppercase}`}
          >
            {title}
            {icon ? (
              <ImageButtonDefault src={src} alt={alt} width={48} height={48} />
            ) : (
              ""
            )}
          </ButtonMedium>
        );
      case "small":
        return (
          <ButtonSmall
            onClick={onClick}
            className={`${isColor} ${type} ${isUppercase}`}
          >
            {title}
            {icon ? (
              <ImageButtonDefault src={src} alt={alt} width={48} height={48} />
            ) : (
              ""
            )}
          </ButtonSmall>
        );
      case "full":
        return (
          <ButtonFull
            onClick={onClick}
            className={`${isColor} ${type} ${isUppercase}`}
          >
            {title}
            {icon ? (
              <ImageButtonDefault src={src} alt={alt} width={48} height={48} />
            ) : (
              ""
            )}
          </ButtonFull>
        );
      case "search":
        return (
          <ButtonSearch
            onClick={onClick}
            className={`${isColor} ${type} ${isUppercase}`}
          >
            {title}
            {icon ? (
              <ImageButtonDefault src={src} alt={alt} width={48} height={48} />
            ) : (
              ""
            )}
          </ButtonSearch>
        );

      case "link":
        return (
          <ButtonLink>
            <Link to={href} className={`${isColor} ${type} ${isUppercase}`}>
              {icon ? <FaChevronLeft /> : ""}
              {title}
            </Link>
          </ButtonLink>
        );

      default:
        return (
          <ButtonContainerDefault>
            <ButtonLarge
              onClick={onClick}
              className={`${isColor} ${type} ${isUppercase}`}
            >
              {title}
              {icon ? <ImageButtonDefault width={60} height={60} /> : ""}
            </ButtonLarge>
          </ButtonContainerDefault>
        );
    }
  };

  return renderButton();
};

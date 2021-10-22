import { TextP, TextSmall, TextStrong, TextSpan } from "./styles";

type HeadingProps = {
  children?: string;
  tag?: "p" | "small" | "strong" | "span";
  color?: string;
  uppercase?: boolean;
  mb?: string | number;
};

export const TextDefault: React.FC<HeadingProps> = ({
  children,
  color = "",
  tag = "p",
  uppercase = false,
  mb = 2,
}) => {
  const renderText = () => {
    switch (tag) {
      case "p":
        return (
          <TextP
            mb={mb}
            iscolor={color}
            upcase={uppercase}
            className={`${tag}`}
          >
            {children}
          </TextP>
        );
      case "small":
        return (
          <TextSmall
            mb={mb}
            iscolor={color}
            upcase={uppercase}
            className={`${tag}`}
          >
            {children}
          </TextSmall>
        );
      case "span":
        return (
          <TextSpan
            mb={mb}
            iscolor={color}
            upcase={uppercase}
            className={`${tag}`}
          >
            {children}
          </TextSpan>
        );
      case "strong":
        return (
          <TextStrong
            mb={mb}
            iscolor={color}
            upcase={uppercase}
            className={`${tag}`}
          >
            {children}
          </TextStrong>
        );
      default:
        return <p>header example</p>;
    }
  };

  return renderText();
};

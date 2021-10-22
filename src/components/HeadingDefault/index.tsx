import {
  HeadingH1,
  HeadingH2,
  HeadingH3,
  HeadingH4,
  HeadingH5,
  HeadingH6,
} from "./styles";

type HeadingProps = {
  children?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color?: string;
  uppercase?: boolean;
};

export const HeadingDefault: React.FC<HeadingProps> = ({
  children,
  color = "",
  tag = "h1",
  uppercase = false,
}) => {
  const isColor = color ? color : "color_black-500";
  // const isUppercase = uppercase ? `${isUppercase}` : 'none';
  const renderHeading = () => {
    switch (tag) {
      case "h1":
        return (
          <HeadingH1
            iscolor={color}
            upcase={uppercase}
            className={`${isColor} ${tag}`}
          >
            {children}
          </HeadingH1>
        );
      case "h2":
        return (
          <HeadingH2
            iscolor={color}
            upcase={uppercase}
            className={`${isColor} ${tag}`}
          >
            {children}
          </HeadingH2>
        );
      case "h3":
        return (
          <HeadingH3
            iscolor={color}
            upcase={uppercase}
            className={`${isColor} ${tag}`}
          >
            {children}
          </HeadingH3>
        );
      case "h4":
        return (
          <HeadingH4
            iscolor={color}
            upcase={uppercase}
            className={`${isColor} ${tag} `}
          >
            {children}
          </HeadingH4>
        );
      case "h5":
        return (
          <HeadingH5
            iscolor={color}
            upcase={uppercase}
            className={`${isColor}`}
          >
            {children}
          </HeadingH5>
        );
      case "h6":
        return (
          <HeadingH6
            iscolor={color}
            upcase={uppercase}
            className={`${color} ${tag}`}
          >
            {children}
          </HeadingH6>
        );
      default:
        return <h1>header example</h1>;
    }
  };

  return renderHeading();
};

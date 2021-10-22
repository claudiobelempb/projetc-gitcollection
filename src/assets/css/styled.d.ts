import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      dark_100: string;
      light_100: string;
      black_100: string;
      white_100: string;
      blue_100: string;
      blue_50: string;
      blue_10: string;
      green_100: string;
      green_50: string;
      red_100: string;
      red_50: string;
      gray_100: string;
      gray_50: string;
      gray_10: string;
      yellow_100: string;
    };

    fonts: {
      familys: {
        roboto: string;
        open_sans: string;
      };
      sizes: {
        lx: string;
        mx: string;
        sx: string;
        ls: string;
        ms: string;
        ss: string;
      };
      spacings: {
        lx: string;
        mx: string;
        sx: string;
        ls: string;
        ms: string;
        ss: string;
      };
    };

    medias: {
      lx: string;
      mx: string;
      sx: string;
    };
  }
}

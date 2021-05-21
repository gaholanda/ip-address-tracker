import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      light: string;
      dark: string;
    };
    breakpoints: {
      sm: string;
      lg: string;
    };
  }
}

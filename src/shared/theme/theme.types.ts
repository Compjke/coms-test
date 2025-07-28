declare module "@mui/material/styles" {
  interface Palette {
    blueGray: Record<string, string>;
    blue: Record<string, string>;
    orange: Record<string, string>;
    red: Record<string, string>;
    green: Record<string, string>;
    indigo: Record<string, string>;
    sky: Record<string, string>;
    beige: string;
    yellow: Record<string, string>;
    button: {
      hover: string;
      disabled: string;
      main: string;
    };
    filter: {
      fill: string;
      stroke: string;
    };
    status: {
      invite: string;
    };
    base: {
      white: string;
      black: string;
    };
    customText: {
      main: string;
      gray: string;
      lighterGray: string;
    };
  }

  interface PaletteOptions {
    blueGray?: Record<string, string>;
    blue?: Record<string, string>;
    orange?: Record<string, string>;
    red?: Record<string, string>;
    green?: Record<string, string>;
    indigo?: Record<string, string>;
    sky?: Record<string, string>;
    beige?: string;
    yellow?: Record<string, string>;
    button?: {
      hover?: string;
      disabled?: string;
      main?: string;
    };
    filter?: {
      fill?: string;
      stroke?: string;
    };
    status?: {
      invite?: string;
    };
    base?: {
      white?: string;
      black?: string;
    };
    customText?: {
      main?: string;
      gray?: string;
      lighterGray?: string;
    };
  }
}

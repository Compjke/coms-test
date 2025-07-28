// Цвета для темы Material UI, собраны из Figma Tokens
// Дубликаты отмечены в комментариях

const colors = {
  blueGray: {
    200: '#e2e8f0', // дубликат Gray outline
    300: '#cbd5e1', // дубликат Gray outline
    400: '#94a3b8', // дубликат Blue Gray 500
    500: '#94a3b8', // дубликат Blue Gray 400, Gray text, Lightest gray text
    600: '#475569',
    700: '#334155', // дубликат Lighter gray text
    800: '#1e293b',
    900: '#0f172a',
  },
  blue: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3764a9',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    dark: '#14213d',
    additional: '#3b82f6',
  },
  orange: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
    primary: '#fca311',
  },
  red: {
    50: '#fef2f2',
    500: '#ef4444',
    700: '#b91c1c',
    error: '#f44336', // из SCSS
  },
  green: {
    50: '#f0fdf4',
    500: '#22c55e',
    700: '#15803d',
    alt: '#4ade80', // из Collection 1
  },
  indigo: {
    50: '#eef2ff',
    500: '#6366f1',
    700: '#4338ca',
    alt: '#818cf8', // из Collection 1
  },
  sky: {
    50: '#f0f9ff',
    500: '#0ea5e9',
    700: '#0369a1',
    alt: '#38bdf8', // из Collection 1
  },
  beige: '#e59b83',
  yellow: {
    500: '#eab308',
  },
  button: {
    hover: '#ffffff4d',
    disabled: '#ecab87',
    main: '#ef4444',
  },
  filter: {
    fill: '#f8fafc',
    stroke: '#e2e8f0',
  },
  status: {
    invite: '#ffaa00',
  },
  base: {
    white: '#ffffff',
    black: '#000000',
  },
  background: {
    default: '#fff', // Lightest gray background
    paper: '#ffffff', // White background for paper components
  }
};

export default colors;

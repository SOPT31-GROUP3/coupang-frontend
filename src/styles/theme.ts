import { DefaultTheme } from 'styled-components';

const color = {
  black: '#000000',
  white: '#ffffff',
  gray800: '#666666',
  gray700: '#777777',
  gray600: '#8A8A8A',
  gray500: '#999999',
  gray400: '#ACACAC',
  gray300: '#DDDDDD',
  gray200: '#EAEAEA',
  gray100: '#EEEEEE',
  blue01: '#356BFF',
  red01: '#ED1C24',
  red02: '#AE0000',
  green: '#008C00',
  yellow: '#FF9500',
};

const fontWeight = {
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
};

const theme: DefaultTheme = {
  color,
  fontWeight,
};

export default theme;

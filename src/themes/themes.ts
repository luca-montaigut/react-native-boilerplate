const palette = {
  black: '#111113',
  white: '#FFFFFF',
  red: '#FF0000',
};

const baseTheme = { palette };

export const lightTheme = {
  ...baseTheme,
  colors: {
    danger: baseTheme.palette.red,
    statusBar: 'dark-content',
    mainBackground: baseTheme.palette.white,
    mainTextColor: baseTheme.palette.black,
  },
};

export const darkTheme = {
  ...baseTheme,
  colors: {
    ...lightTheme.colors,
    statusBar: 'light-content',
    mainBackground: baseTheme.palette.black,
    mainTextColor: baseTheme.palette.white,
  },
};

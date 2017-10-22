const screenXsMin = '424px';
const screenSmMin = '768px';
const screenLgMin = '1025px';

export default {
  brandPurple: '#753c83',
  brandPink: '#d01262',
  lightPink: '#ec95a7',
  lightestPink: '#ffeaed',
  grey: '#888888',
  lightGrey: '#e1e1e1',
  mediumGrey: '#878787',
  purpleGrey: '#f3f3f4',
  inputGrey: '#FBFBFB',
  darkGrey: '#333333',
  lightGreen: '#deffd5',
  darkRed: "#a90001",
  orange: '#f7941d',
  sbOn: '#ED2928',
  sbOff: '#282828',
  screenSmMin,
  screenXsMin,
  screenLgMin,
  mediaDesktop: `@media (min-width: ${screenLgMin})`,
  mediaTablet: `@media (min-width: ${screenXsMin}) and (max-width: ${screenLgMin})`,
  mediaPhone: `@media (max-width: ${screenXsMin})`,
  mediaMobile: `@media (max-width: ${screenLgMin})`
};

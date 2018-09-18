import Typography from 'typography';
import deYoungTheme from 'typography-theme-de-young';

import { colors } from 'utils/variables';

const typography = new Typography(
  Object.assign(deYoungTheme, {
    overrideThemeStyles: () => ({
      'h1, h2, p': {
        color: colors.black,
      },
    }),
  }),
);

const family = typography.options.googleFonts
  .map(font => `${font.name.split(' ').join('+')}:${font.styles.join(',')}`)
  .join('|');

export const typographyFontsUrl = `//fonts.googleapis.com/css?family=${family}`;

export default typography;

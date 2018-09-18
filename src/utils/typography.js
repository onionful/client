import Typography from 'typography';
import deYoungTheme from 'typography-theme-de-young';

import { colors } from 'utils/variables';

export default new Typography(
  Object.assign(deYoungTheme, {
    overrideThemeStyles: () => ({
      'h1, h2, p': {
        color: colors.black,
      },
    }),
  }),
);

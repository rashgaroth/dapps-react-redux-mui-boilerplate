import { createTheme } from '@mui/material/styles';
import colors from 'styles/base/theme.scss';
import 'styles/base/font.scss';
import componentStyleOverrides from './overrides';
import themePalette from './pallete';
import themeTypography from './typography';
import themeShapes from './shapes';

export const theme = ({ customization }) => {
  const color = colors;

  const themeOption = {
    colors: color,
    heading: color.grey900,
    paper: color.paper,
    backgroundDefault: color.paper,
    background: color.primaryLight,
    darkTextPrimary: color.grey700,
    darkTextSecondary: color.grey500,
    textDark: color.grey900,
    menuSelected: color.secondaryDark,
    menuSelectedBack: color.secondaryLight,
    divider: color.grey200,
    customization,
  };

  const themeOptions = {
    direction: 'ltr',
    palette: themePalette(themeOption),
    mixins: {
      toolbar: {
        minHeight: '48px',
        padding: '16px',
        '@media (min-width: 600px)': {
          minHeight: '48px',
        },
      },
    },
    typography: themeTypography(themeOption),
    shape: themeShapes(),
  };

  const themes = createTheme(themeOptions);
  themes.components = componentStyleOverrides(themeOption);

  return themes;
};

export default theme;

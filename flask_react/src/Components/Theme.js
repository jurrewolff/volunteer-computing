import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { createTheme} from '@mui/material/styles';
// import { ThemeProvider } from "styled-components";


// export const themeOptions = createTheme = {
//   palette: {
//     type: 'light',
//     primary: {
//       main: '#86b53f',
//     },
//     secondary: {
//       main: '#f50057',
//     },
//   },
// };

export const themeOptions = createTheme = {
  palette: {
    type: 'light',
    primary: {
      main: '#86b53f',
    },
    secondary: {
      main: '#f50057',
    },
  },
  props: {
    MuiAppBar: {
      color: 'inherit',
    },
  },
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: '#689f38',
        color: '#fff',
      },
    },
  },
};
import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const theme = createMuiTheme({
    palette: {
        common: {
            orange: `${arcOrange}`,
            blue: `${arcBlue}`
        },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
});

export default theme;
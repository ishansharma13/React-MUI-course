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
  typography:{
    tab:{
    fontFamily: 'Raleway',
    textTransform: 'none',
    fontWeight: '700',
    fontSize: "1rem"
    },
    estimate: {
      textTransform: 'none',
      fontFamily: "Pacifico",
      fontSize: "1em",
      color: "white"
    }
  }
});

export default theme;
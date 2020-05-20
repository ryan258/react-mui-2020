import { createMuiTheme } from "@material-ui/core/styles";
import { blue, red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: blue,
  },
  status: {
    danger: "orange",
  },
});

export default theme;

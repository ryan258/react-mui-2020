import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import AcUnitRoundedIcon from "@material-ui/icons/AcUnitRounded";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
}));

const Header = () => {
  const styles = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={styles.typographyStyles}>Our Header!</Typography>
        <AcUnitRoundedIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;

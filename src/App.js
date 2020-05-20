import React from "react";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  hiThereStyle: {
    fontStyle: "oblique",
    fontSize: "30px",
  },
  buttonStyles: {
    color: "green",
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Typography className={classes.hiThereStyle} variant="h1" color="primary">
        Hi, there!
      </Typography>
      <Button color="secondary" variant="outlined">
        Our First Button
      </Button>
    </div>
  );
}

export default App;

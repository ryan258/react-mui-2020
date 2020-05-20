import React from "react";
import TheCard from "./TheCard";
import { Grid } from "@material-ui/core";
import coffeeMakerList from "../constants";

const Content = () => {
  const getCoffeeMakerCard = (coffeeMakerObject) => {
    return (
      <Grid item xs={12} sm={4} key={coffeeMakerObject.title}>
        <TheCard {...coffeeMakerObject} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={4}>
      {coffeeMakerList.map((coffeeMakerObj) =>
        getCoffeeMakerCard(coffeeMakerObj)
      )}

      {/* <TheCard
          title={"Hamilton Beach Flexbrew"}
          subtitle={"89.99"}
          avatarSrc="https://images-na.ssl-images-amazon.com/images/I/81mjh5ZSu1L._AC_SL1500_.jpg"
          imgSrc="https://images-na.ssl-images-amazon.com/images/I/818rz3CIaFL._AC_SL1500_.jpg"
          description="No two coffee drinkers are the same – so, the flexibility to customize how and what you brew is key. From fresh grounds to K-Cup pods, the Hamilton Beach FlexBrew 2-Way Coffee Maker gives you the options to please fans of all types of coffees."
        /> */}
    </Grid>
  );
};

export default Content;

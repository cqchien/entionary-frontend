import { Grid } from "@material-ui/core";
import React from "react";
import FeatureBox from "../components/FeatureBox";
import FEATURE_LIST from "../constant/features";

const Home = () => {
  return (
    <Grid container spacing={3}>
      {FEATURE_LIST.map((box, index) => (
        <Grid item xs={12} md={6} lg={4} key={index}>
          <FeatureBox
            imageUrl={box.imageUrl}
            featureTitle={box.featureTitle}
            urlToLink={box.urlToLink}
            featureSubTitle={box.featureSubTitle}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;

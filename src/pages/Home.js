import React from "react";
import { useTitle } from "../Hook/useTitle";
import { Grid } from "@material-ui/core";
import FeatureBox from "../components/FeatureBox";
import FEATURE_LIST from "../constant/features";

const HomePage = () => {
  useTitle("Entionary - Comprehensive English learning application");

  return (
    <div className="container my-10">
      <Grid container spacing={3}>
        {FEATURE_LIST.map((box, index) => (
          <Grid item xs={12} md={6} lg={6} key={index}>
            <FeatureBox
              imageUrl={box.imageUrl}
              featureTitle={box.featureTitle}
              urlToLink={box.urlToLink}
              featureSubTitle={box.featureSubTitle}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default HomePage;

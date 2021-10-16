import { makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import featureBoxStyle from "./style";
import PropTypes from "prop-types";

const useStyle = makeStyles(featureBoxStyle);

const FeatureBox = ({ urlToLink, imageUrl, featureTitle, featureSubTitle }) => {
  const classes = useStyle();
  return (
    <Link to={urlToLink} className={`${classes.root} flex-center--ver w-100`}>
      <img className={classes.icon} src={imageUrl} alt="Icon" />
      <div>
        <h2 className={classes.title}>{featureTitle}</h2>
        <p className={classes.subTitle}>{featureSubTitle}</p>
      </div>
    </Link>
  );
};

FeatureBox.propTypes = {
  imageUrl: PropTypes.string,
  featureTitle: PropTypes.string,
  urlToLink: PropTypes.string,
  featureSubTitle: PropTypes.string,
};

FeatureBox.defaultProps = {
  imageUrl: "",
  featureTitle: "",
  urlToLink: "",
  featureSubTitle: "",
};

export default FeatureBox;

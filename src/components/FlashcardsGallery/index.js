import { makeStyles, Tooltip } from "@material-ui/core";
import React from "react";
import Loading from "../Custom/Loading";
import galleryStyle from "./style";

const useStyle = makeStyles(galleryStyle);

const FlashcardsGallery = ({
  loading,
  pagination,
  handleNextPage,
  handlePrevPage,
  children,
}) => {
  const classes = useStyle();
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className={`${classes.root} entionary-container`}>
            {children}
          </div>
          ))
          {pagination.hasPreviousPage && (
            <Tooltip title="Back">
              <span className="nav-arrow prev" onClick={handlePrevPage} />
            </Tooltip>
          )}
          {pagination.hasNextPage && (
            <Tooltip title="Next">
              <span className="nav-arrow next" onClick={handleNextPage} />
            </Tooltip>
          )}
        </>
      )}
    </>
  );
};

export default FlashcardsGallery;

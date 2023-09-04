import React from "react";
import LoaderSvg from "public/assets/svg/loader.svg";
import "public/assets/css/loader.css";

function Loader({ classes }) {
  return (
    <div className={classes}>
      <LoaderSvg className="loader" />
    </div>
  );
}

export default Loader;

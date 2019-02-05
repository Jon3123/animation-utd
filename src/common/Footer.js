﻿import React from "react";
import classNames from "classnames";

const PACKAGE_NAME = "footer-component";

const Footer = () => {
  const classes = classNames(
    PACKAGE_NAME,
    "footer",
  );

  return (
    <div className="footer"><p>Oof</p><footer className={classes} /></div>
  );
};

export default Footer;

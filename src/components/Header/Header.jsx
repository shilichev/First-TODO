import React from "react";
import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.header}>
      <p className={classes.projectName}>Project TODO</p>
      <p className={classes.name}>Shilichev Daniil</p>
    </div>
  );
}

export default Header;

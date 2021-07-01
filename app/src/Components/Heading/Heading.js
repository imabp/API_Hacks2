import React from "react";
import "./Heading.css";
import { Grid } from "@material-ui/core";
import Typist from "react-typist";

function Heading() {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <h1 className="title">
            {" "}
            API
            <br /> HACKS <span className="version"> 2.0</span>{" "}
          </h1>
        </Grid>
      </Grid>
    </>
  );
}

export default Heading;

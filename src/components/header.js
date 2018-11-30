import React from "react"
import {HeaderStyles} from "./header.styles";

export default ({secondLine}) => (
  <h2 className={HeaderStyles}>
    This is a header.
    <br/>
    {secondLine}
  </h2>
);
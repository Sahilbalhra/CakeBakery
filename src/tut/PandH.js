import React from "react";
import { Typography } from "@mui/material";
const PandH = () => {
  return (
    <div>
      {/* sx used for styling */}
      <Typography variant="h1" sx={{backgroundColor:'red'}}>I am Heading variant h1</Typography>
      {/* without sx */}
      <Typography variant="h2" backgroundColor="green">I am Heading variant h2</Typography>
      <Typography variant="h3">I am Heading variant h3</Typography>
      <Typography variant="h4">I am Heading variant h4</Typography>
      <Typography variant="h5">I am Heading variant h5</Typography>
      <Typography variant="h6">I am Heading variant h6</Typography>
      <Typography variant="body1">I am Heading variant body1</Typography>
      <Typography variant="body2">I am Heading variant body2</Typography>
    </div>
  );
};

export default PandH;

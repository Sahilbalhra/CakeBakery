import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const HeroSection = () => {
  return (
    <Grid container direction="row" alignItems="center">
      <Grid item xs={12} sm={6} order={{xs:2,sm:1}}>
        <Typography variant="h3">
          A bliss in every Byte
        </Typography>
        <Typography variant="h5">
          We offer tasty cakes abd sweets for you
        </Typography>
        <Button variant="contained" sx={{borderRadius:5}}>Call Us</Button>
      </Grid>
      <Grid item xs={12} sm={6} justifyContent="center" order={{xs:1,sm:2}}>
        <Box
          component="img"
          src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1542062283%2Fchocolate-and-cream-layer-cake-1812-cover.jpg%3Fitok%3DrEWL7AIN&w=450&c=sc&poi=face&q=60"
        ></Box>
      </Grid>
    </Grid>
  );
};

export default HeroSection;

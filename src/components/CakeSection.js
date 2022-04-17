import { Typography, Card, CardMedia, CardContent, Stack } from "@mui/material";
import React from "react";

const CakeSection = () => {
  const cakes = [
    {
      name: "Chocolate",
      image:
        "https://veenaazmanov.com/wp-content/uploads/2019/08/Chocolate-Birthday-Cake-Recipe.jpg",
    },
    {
      name: "Red Valvet",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCLQJViOoR-yM1HdXG8ahU17DLHHbGC8Dsnw&usqp=CAU",
    },
    {
      name: "Rose",
      image:
        "https://4.imimg.com/data4/VV/VV/GLADMIN-/images-pr-l-rose-cake-half-kg_1-500x500.jpg",
    },
    {
      name: "Butter Scotch",
      image:
        "https://veenaazmanov.com/wp-content/uploads/2018/04/Butterscotch-Cake-Recipe.jpg",
    },
    {
      name: "Strawberry",
      image:
        "https://www.ambitiouskitchen.com/wp-content/uploads/2021/02/Inside-Out-Chocolate-Covered-Strawberry-Cake-3.jpg",
    },
    {
      name: "Mix fruit",
      image:
        "https://cdn.igp.com/f_auto,q_auto,t_prodm/products/p-fresh-fruit-almond-cake-half-kg--110227-m.jpg",
    },
  ];
  return (
    <>
      <Typography variant="h4" mt={6} mb={6}>
        Cake--
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        sx={{ flexWrap: "wrap" }}
      >
        {cakes.map((cake) => {
          return (
            <Card sx={{ maxWidth: 300, mb: 2 }}>
              <CardMedia
                component="img"
                height="250"
                image={cake.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography variant="h5">{cake.name}</Typography>
              </CardContent>
            </Card>
          );
        })}
      </Stack>
    </>
  );
};

export default CakeSection;

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ContainerCard } from "./styles";

export const MenuCard = (props) => {
  return (
    <ContainerCard>
      <Card sx={{ maxWidth: 355 }} className="Card">
        <CardMedia
          component="img"
          alt={props.alt}
          height="140"
          image={props.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" className="buttonPrice">
            {props.price}
          </Button>
          <Button size="small" className="buttonBuy">
            {props.buy}
          </Button>
        </CardActions>
      </Card>
    </ContainerCard>
  );
};

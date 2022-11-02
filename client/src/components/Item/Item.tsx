import React from "react";
import { Item } from "../../types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

const ItemContainer = styled.div`
  margin: 2%;
`;
const ItemComponent = ({ url, title, price }: Item) => {
  return (
    <ItemContainer>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" height="140" image={url} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </ItemContainer>
  );
};

export default ItemComponent;

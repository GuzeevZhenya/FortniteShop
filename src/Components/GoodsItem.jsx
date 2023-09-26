import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export const GoodsItem = (props) => {
  const { id, name, description, price, image, icon, full_background } =
    props.goods;
  const { addToBasket = Function.prototype } = props;

  const [order, setOrder] = useState([]);

  const handleAddToOrder = (item) => {
    console.log(item);
   
    props.addToBasket(item);
    // const card = props.goods.find((card) => card.id === id);
    // setOrder([...order, card]);
  };

  return (
    <Card className="card">
      <CardActionArea>
        <CardMedia component="img" image={full_background} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={() => handleAddToOrder({ id, name, description, price })}
          size="small"
          color="primary"
        >
          Купить
        </Button>
        <span>{price}</span>
      </CardActions>
    </Card>
  );
};

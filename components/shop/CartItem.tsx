// const CartItem = (props: { item: object; }) => {
//    return <>
//      <p>props.item</p>
//    </>
//  };
 
//  export default CartItem;


 import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useRecoilState } from "recoil";
import { shoppingCartState } from "../../atoms";
import { VariantType, useSnackbar } from "notistack";


import styles from './Cartitem.module.css'
import { StringLiteralType } from 'typescript';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CartItem(props: {item: any}) {
  const item = props.item;
  const { id, title, type, price, averageRating, authors, ratings, stock = 1 } = props.item;
  const [expanded, setExpanded] = React.useState(false);
  const [shoppingCart, setShoppingCart] = useRecoilState(shoppingCartState);

  const { enqueueSnackbar } = useSnackbar();


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addItem = () => {
    setShoppingCart((oldShoppingCart) => {
      const existingItem = oldShoppingCart.find((i: { id: any; }) => i.id === id);
      if (existingItem) {
        if (existingItem.quantity >= stock) {
          // enqueueSnackbar(`Out of stock!`, { variant: "error" });

          return [...oldShoppingCart];
        }
        const newItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        // enqueueSnackbar(`"${title}" was successfully added.`, {
        //   variant: "success",
        // });
        return [...oldShoppingCart.filter((i) => i.id !== id), newItem];
      }
      // enqueueSnackbar(`"${title}" was successfully added.`, {
      //   variant: "success",
      // });
      return [
        ...oldShoppingCart,
        {
          // ...props,
          ...item,
          quantity: 1,
        },
      ];
    });
  };


  return (
   <div className={styles.itemBody}>
    <Card sx={{ width: 300, height: 500 }}>
    <CardMedia
        component="img"
        height="250"
        width="194"        
        image={item.image}
        alt={item.name}
        // classes={styles.img}

      />
      <CardHeader
        // avatar={
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     R
        //   </Avatar>
        // }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={item.title}
        subheader={'R' + (parseInt(item.price)/100).toFixed(2) }
      />
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to cart"
          disabled={stock <= 0}
          onClick={() => {
            addItem(shoppingCart);
          }}
        >
          <AddShoppingCartIcon />
        </IconButton>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon Color={item.liked ? "red" : ''}/>
        </IconButton> */}
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore> */}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
  );
}
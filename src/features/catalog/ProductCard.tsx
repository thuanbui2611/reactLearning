import { CardMedia, Button, Card, CardActions, CardContent, Typography, CardHeader, Avatar } from "@mui/material";
import { Product } from "../../app/models/product";

interface Props 
{
    product: Product
}

export default function ProductCard({product}: Props)
{
    return (
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader avatar={
            <Avatar>
              {product.title.charAt(0).toUpperCase()}
            </Avatar>
          }
          title={product.title.substring(0, 20) + "..."}
          titleTypographyProps={{
            sx: {fontWeight: 'bold', color:'secondary.main'}
          }}
          />
        <CardMedia
          sx={{ height: 140, backgroundSize: "contain", bgcolor: '' }}
          image="../../../images/meo1.jpg"
          title= {product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" >
            Meo
          </Typography>
          <Typography gutterBottom variant="h6" component="div" color={'red'}>
            ${product.price.toFixed(2)}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ minBlockSize: 80}}>
            {product.description?.substring(0, 100) + "..."}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">See More</Button>
        </CardActions>
      </Card>

    )
}

import { Grid } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";

interface Props
{
    products: Product[];
}
export default function ProductList({products}: Props)
{
    return(
        <Grid container spacing={2}>
            {products.map((product) => (
                <Grid item xs={3}>
                    <ProductCard key={product.id} product={product} />
                </Grid>  
                ))}            
        </Grid>
    )
}
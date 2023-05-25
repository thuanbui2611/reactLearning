import { Typography } from "@mui/material"
import { Product } from "../../app/models/product"
import ProductList from "./ProductList"
import { useState, useEffect } from "react";


export default function Catalog()
{
    const [products, setProducts] = useState<Product[]>([]);
  
    useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => setProducts(data))
    }, [])

    // function addProduct()
    // {
    // setProducts(prevState => [...prevState, 
    // {
    //     id: prevState.length + 669,
    //     title: 'product' + (prevState.length + 1),
    //     price: 12.3,
    //     description: 'abc',
    //     rating: [1,2]
    // }])

    return(
        <>
            <div className="App">
            <Typography variant="h2" style={{color: 'red'}}>Products</Typography>
            <ProductList products={products}/>
            {/* <Button variant='contained' onClick={addProduct}> Add product </Button> */}
            </div>
        </>
    )
}
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Stack } from "@mui/material";
import { Product, ProductActionButton, ProductActionWrapper, ProductAddCart, ProductFavButton, ProductImage } from "../../style/Product";
import ProductMeta from "./ProductMeta";
import ShareIcon from "@mui/icons-material/Share";
import FitScreen from "@mui/icons-material/FitScreen";


//Fitscreen de typescrite pour agrandir detail produit

//product matches sont es props
export default function SingleProduct({product, matches}){

    

    //fragment <> pour rerender de pls composant
    return (

        <>
            <Product> 
                <ProductImage src = {product.image}/>
                <ProductMeta product = {product} matches = {matches}/>

                
                <ProductActionWrapper>
                    <Stack direction="row">
                        <ProductFavButton isFav = {0}>
                            <FavoriteIcon/>
                        </ProductFavButton>
                        <ProductActionButton>
                            <ShareIcon color = "primary"/>
                        </ProductActionButton>
                        <ProductActionButton >
                            <FitScreen color = "primary"/>
                        </ProductActionButton>
                    </Stack>
                </ProductActionWrapper>

            </Product>


            <ProductAddCart variant = "contained" > Panier </ProductAddCart>

        </>
      
        
    );
}
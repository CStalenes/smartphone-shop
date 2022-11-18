import FavoriteIcon from "@mui/icons-material/Favorite";
import { Stack } from "@mui/material";
import { Product, ProductActionButton, ProductActionWrapper, ProductAddCart, ProductFavButton, ProductImage } from "../../style/Product";
import ProductMeta from "./ProductMeta";
import ShareIcon from "@mui/icons-material/Share";
import FitScreen from "@mui/icons-material/FitScreen";
import { useState } from "react";



export default function SingleProductDesktop({product, matches}){

    // Pour rajouter des effet d'animation
    const [showOption, setShowOption] = useState(false);

   


    const handleMouseEnter = () =>{
        setShowOption(true);
    }

    const handleMouseLeave = () =>{
        setShowOption(false);
    }

    return (

        <>
            <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 
                
                <ProductImage src = {product.image}/>
                
                <ProductFavButton isFav = {0}> 
                    <FavoriteIcon/>
                </ProductFavButton>
                {showOption && ( 
                
                    <ProductAddCart show = {showOption} variant = "contained">
                        Panier
                    </ProductAddCart>
                )}

                <ProductActionWrapper show = {showOption}>
                    <Stack direction="column">
   
                        <ProductActionButton>
                            <ShareIcon color = "primary"/>
                        </ProductActionButton>
                        
                        <ProductActionButton >
                            <FitScreen color = "primary"/>
                        </ProductActionButton>
                    
                    </Stack>
                </ProductActionWrapper>


            </Product>

            <ProductMeta product = {product} matches = {matches}/>

        
        </>
      
        
    );
}
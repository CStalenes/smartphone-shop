//import styled from "@emotion/styled";
import { Button, IconButton } from "@mui/material";
import { Box, styled } from "@mui/system";
import {Colors} from "../theme";
import { slideInBottom, slideInRight } from "../../animations";



export const Product = styled(Box)(({theme}) => ({

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      position: "relative",
    },    

}));


export const ProductImage = styled('img')(({src, theme}) => ({

    src: `url(${src})`,
    width: "100%",
    background: Colors.light_gray,
    padding: '10px',
    [theme.breakpoints.down("md")]: {
      width: "80%", 
      padding: '24px',
    },

}));


export const ProductActionButton = styled(IconButton)(()=>({

    background : Colors.white,
    margin: 4,
}));


//il faut rajouter cela a chaque props dans nos composant
//probleme dans console qui ne reconnait icon dans dom dc faut rajouter shouldforward cela pour le contouner le probleme
export const ProductFavButton = styled(ProductActionButton,{
    shouldForwardProp: (prop) => prop!== 'isFav'
} )(({isFav, theme})=>({
    color: isFav ? Colors.primary : Colors.light,  
    [theme.breakpoints.up("md")]: {
    position: "absolute", //relative for page size
    right: 0,
    top: 0,
  },
}));


export const ProductAddCart = styled(Button ,{
    shouldForwardProp: (prop) => prop!== 'show'
})(({show, theme})=>({
//show for the button be slide 
    width: "120px",
    fontSize: "12px",
    [theme.breakpoints.up("md")]: {
        position: "absolute",    
        bottom: "2%",
        width: "300px",
        padding: "10px 5px",
        animation:
        show  &&
        `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
       
    },
    background: Colors.black_light,
    opacity: 0.9,

}));

//meta for meta description
//theme en parametre
export const ProductMetaWrapper = styled(Box)(() =>({
    
    padding: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

}));


export const ProductActionWrapper = styled(Box ,{
    shouldForwardProp: (prop) => prop!== 'show'
})(({show, theme}) =>({

    [theme.breakpoints.up("md")]: {
        display: show ? 'visible' : 'none',
        position: "absolute",
        right: 0,
        top: '20%',
        animation: show && `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
    }

}));

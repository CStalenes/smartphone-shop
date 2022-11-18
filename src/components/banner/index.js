import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTitle } from "../../style/banner";

export default function Banner(){
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <BannerContainer>
            <BannerImage src = "../images/banner/banner_shop.png"/>
            <BannerContent>
                <Typography variant = "h6"> Nouvelle Collection </Typography>
                <BannerTitle variant = "h2"> My Phone</BannerTitle>
                <BannerDescription variant = "subtitle"> Venez découvrir nos offre spéciales sur une bonne 
                majorité des derniers smartphones
                </BannerDescription>
                <BannerShopButton color = "primary"> Decouvrir </BannerShopButton>
            </BannerContent>
        </BannerContainer>
    );

}
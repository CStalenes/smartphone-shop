import { Box, Button, Grid, List, ListItemText, Stack, Typography } from "@mui/material";
import { FooterTitle, SubscribTf } from "../../style/footer";
import { Colors } from "../../style/theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";


export default function Footer(){
    return(
        <Box
            sx ={{
                background: Colors.shaft,
                color: Colors.white,
                p: {xs: 4, md: 10},
                pt: 12,
                pb:12,
                fontSize:{ xs: "12px", md:"14px"},
            }}
        >

            <Grid container spacing={2}  justifyContent = "center">
                
                <Grid item md={6} lg = {4}>
                    <FooterTitle variant="body1"> A Propos </FooterTitle>
                    <Typography variant="caption2">
                        Nous somme un recent magasin qui vient d'ouvrir et qui propose des smartphone tendance
                    </Typography>

                  
                    <Box
                        sx = {{
                            mt: 4,
                            color: Colors.dove_gray
                        }}
                    >
                        <FacebookIcon sx={{mr: 1}}/>
                        <TwitterIcon sx = {{mr: 1}}/>
                        <InstagramIcon/>
                    </Box>
                </Grid>

                <Grid item md={6} lg ={2}>
                    <FooterTitle variant = "body1"> Information </FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography lineHeight={2} variant = "caption2"> A Propos </Typography>
                        </ListItemText>

                        <ListItemText>
                            <Typography lineHeight={2} variant = "caption2"> Condition General </Typography>
                        </ListItemText>

                        <ListItemText>
                            <Typography lineHeight={2} variant = "caption2"> Donnee Personnels </Typography>
                        </ListItemText>

                        <ListItemText>
                            <Typography lineHeight={2} variant = "caption2"> Cookies </Typography>
                        </ListItemText>
                    </List>
                </Grid>

                <Grid item md={6} lg = {2}>
                    <FooterTitle variant = "body1"> Compte </FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography lineHeight={2} variant = "caption2"> Connexion </Typography>
                        </ListItemText>

                        <ListItemText>
                            <Typography lineHeight={2} variant = "caption2"> Panier </Typography>
                        </ListItemText>

                        <ListItemText>
                            <Typography lineHeight={2} variant = "caption2"> Mon Compte </Typography>
                        </ListItemText>

                        <ListItemText>
                            <Typography lineHeight={2} variant = "caption2"> Ma Liste </Typography>
                        </ListItemText>
                    </List>
                </Grid>

                <Grid item md={6} lg ={2}>
                    <FooterTitle variant = "body1"> Newletters </FooterTitle>
                    <Stack>
                        <SubscribTf color = "primary" label = "Adresse email" variant = "standard"/>

                        <Button 
                            startIcon = {<SendIcon sx = {{ color : Colors.white}}/> }
                            sx = {{ mt: 4, mb: 4}}
                            variant ="contained">

                        </Button>

                    </Stack>
                </Grid>

                <Grid item md={6} lg = {4}>
                    <Typography variant="caption2">
                            Copyright 2022 - Tous Droits Réservés
                        </Typography>
                </Grid>


            </Grid>
        </Box>

    )
}
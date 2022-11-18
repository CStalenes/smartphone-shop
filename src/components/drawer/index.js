import { Divider, Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import { styled } from "@mui/system";
import { useUIContext } from "../../context/ui";
import { DrawerCloseButton } from "../../style/appbar";
import CloseIcon from "@mui/icons-material/Close";
import { lighten } from "polished";
import { Colors } from "../../style/theme";

//import { DrawerCloseButton } from "../../style/appbar";


const MiddleDivider = styled((props) =>(
    <Divider variant="middle" {...props}/>
)) ``;

export default function AppDrawer(){

    const { drawerOpen, setDrawerOpen} = useUIContext();

    return(
        
        <>
            {drawerOpen && (
                
                <DrawerCloseButton onClick={()=> setDrawerOpen(false)}>
                    <CloseIcon
                        sx={{
                            fontSize : '2.5rem',
                            color: lighten(0.09, Colors.blue_sky)
                        }}
                    /> 
                </DrawerCloseButton>
            )}

            <Drawer open = {drawerOpen}>
                <List>
                    <ListItemButton>
                        <ListItemText> Acceuil </ListItemText>
                    </ListItemButton>
                    <MiddleDivider/>

                    <ListItemButton>
                        <ListItemText> Categorie </ListItemText>
                    </ListItemButton>
                    <MiddleDivider/>


                    <ListItemButton>
                        <ListItemText> Produits </ListItemText>
                    </ListItemButton>
                    <MiddleDivider/>

                    <ListItemButton>
                        <ListItemText> A Propos </ListItemText>
                    </ListItemButton>
                    <MiddleDivider/>

                    <ListItemButton>
                        <ListItemText> Contact </ListItemText>
                    </ListItemButton>
                    <MiddleDivider/>

                </List>
            </Drawer>

        
        </>

       
    )
}
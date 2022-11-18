import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../style/appbar";
//import {ActionIconsContainerMobile, ActionIconsContainerDesktop} from "../../style/appbar";
import SearchIcons from "@mui/icons-material/Search";
import Actions from "./actions";
import { useUIContext } from "../../context/ui";

export default function AppbarDesktop({matches}){
    
    const {setShowSearchBox} = useUIContext();

    return (
        /**
         * AppBar Container
         * Header
         * List
         */
        
        <AppbarContainer>
            <AppbarHeader> Smartphone shop</AppbarHeader>
                <MyList type = "row">
                    <ListItemText primary = "Acceuil"/>
                    <ListItemText primary = "Categorie"/> 
                    <ListItemText primary = "Produit"/> 
                    <ListItemText primary = "Contact"/> 

                    <ListItemButton>
                        <ListItemIcon>
                            <SearchIcons onClick = {() => setShowSearchBox(true)}/>
                        </ListItemIcon>
                    </ListItemButton>
                </MyList>
            <Actions matches ={matches}/>
        </AppbarContainer>
       
    );


}
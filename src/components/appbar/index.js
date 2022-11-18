import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AppbarDesktop from "./barDesktop";
import AppbarMobile from "./barMobile";


export default function Appbar(){
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return(
        <>
            {matches ? <AppbarMobile matches={matches}/> : <AppbarDesktop matches={matches}/> }
        </>

    );
}
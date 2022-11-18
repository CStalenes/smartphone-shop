import { Box, styled } from "@mui/system";
import { Colors } from "../theme";
import { TextField } from "@mui/material";



export const SearchBoxContainer = styled(Box)(({theme}) =>({

    position: 'absolute',
    top: 0,
    left:0,
    width: '100%',
    height: '100%',
    background: Colors.dim_grey,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 99999,
    opacity: 0.9,
}));

export const SearchField = styled(TextField)(({theme})=>({

    ".MuiImportLabel-root":{
        color: Colors.secondary
    },

    " .MuiInput-root": {
        fontSize: '1rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '2rem'
        },
        color:Colors.secondary
    },

    ".MuiInport-root::before": {
        breakpoints: `1px solid ${Colors.secondary}`
    },

    padding: "0 0 0 40px"

}));
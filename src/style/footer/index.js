import { TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Colors } from "../theme";


export const FooterTitle = styled(Typography)(() => ({
    textTransform: 'uppercase',
    marginBottom: '1em'
}));

//another way to target mui component with class 
// Tf for Textfield

export const SubscribTf= styled(TextField)(() =>({

    '.MuiInputLabel-root':{
        color: Colors.white
    },

    ' .MuiInput-root::before':{
        borderBotton: `1 px solid ${Colors.white}`
    },

}));

import { Slide } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { MessageText, PromoContainer } from "../../style/promotions";



const messages = [
    "30% de reduction sur les nouvelles commandes ",
    "Vente Black Friday disponible maintenant"

];

export default function Promotions()
{
    const containerRef = useRef();
    const [messageIndex, setMessageIndex] = useState(0);
    const [show, setShow] = useState(true);

    useEffect(()=>{

        setTimeout(()=>{
            setShow(false)
        }, 3000);

        const intervalId = setInterval(()=>{
            setMessageIndex(i=> (i+1) % messages.length)

            setShow(true);

            setTimeout(()=>{
                setShow(false)
            }, 3000);

        }, 4000);

        return () =>{
            clearInterval(intervalId);
        }
    }, []);


    return (

        <PromoContainer>
            <Slide
                container = {containerRef.current}
                direction = {show ? "left" : "right"} in = {show}
                timeout = {{
                    enter : 500,
                    exit : 100
                }}
            
            >
                <Box display = {"flex"} justifyContent = "center" alignItems={"center"}>
                    <MessageText>
                        {messages[messageIndex]}
                    </MessageText>
                </Box>
            </Slide>
        </PromoContainer>
       
    );
}
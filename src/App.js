//import './App.css';
import {Box, Container, Typography} from "@mui/material";
import {useEffect} from 'react';
import {ThemeProvider } from '@emotion/react';
import theme from "./style/theme";
import Appbar from "./components/appbar";
import Banner from "./components/banner";
import Promotions from "./components/promotions";
import Products from "./components/products";
import Footer from "./components/footer";
import AppDrawer from "./components/drawer";
import { UIProvider } from "./context/ui";
import SearchBox from "./components/search";
//import { UIProvider } from "./context/ui";


function App() {

  useEffect(() => {
    document.title = "Smarphone Shop - Acceuil";
  }, []);

  return (
    <ThemeProvider theme = {theme}> 

      <Container 
        maxWidth = "xl"
        sx = {{
          backgroud: '#fff',
        }}
      >
        <UIProvider>
          <Appbar/>
          <Banner/>
          <Promotions/>
          <Box display="flex" justifyContent={"center"} sx ={{ p: 4}}>
            <Typography variant = "h4"> Nos Produits </Typography>
          </Box>
          <Products/>
          <Footer/>
          <AppDrawer/>
          <SearchBox/>
        </UIProvider>
      </Container>
    </ThemeProvider>
   
  );
}

export default App;

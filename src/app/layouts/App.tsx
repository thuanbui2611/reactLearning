import React from "react";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";
import {useState} from "react";
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Route } from "react-router-dom";
import ContactPage from "../../features/contact/ContactPage";
import AboutPage from "../../features/about/AboutPage";
import ProductDetail from "../../features/catalog/ProductDetail";
import HomePage from "../../features/home/HomePage";

function App() {
  const [darkmode, setDarkMode] = useState(false);
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkmode ? 'dark' : 'light',
        },
      }),
    [darkmode],
  );
  
  function handleThemeChange()
  {
    setDarkMode(!darkmode)
  }
  

  return (
     <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkmode} handleThemeChange={handleThemeChange} />
      <Container>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/catalog' component={Catalog}/>
        <Route path='/catalog/:id' component={ProductDetail}/>
        <Route path='/about' component={AboutPage}/>
        <Route path='/contact' component={ContactPage}/>
      </Container>
    </ThemeProvider>  
  );
}

export default App;
function UseState(arg0: boolean): [any, any] {
  throw new Error("Function not implemented.");
}


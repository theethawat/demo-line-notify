import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./main.css";
import "./tailwind.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Containers/Home";
import About from "./Containers/About";
import { emerald } from "tailwindcss/colors";

const theme = extendTheme({
  colors: {
    green: emerald,
  },
});

function App() {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div>
      <Helmet>
        <meta charSet='utf-8' />
        <title>The Duck Creator App </title>
      </Helmet>
      <ChakraProvider theme={theme}>
        <Router>
          <Navbar />
          <div className='min-h-screen m-8'>
            <Switch>
              <Route path='/about'>
                <About />
              </Route>
              <Route path='/documents'></Route>
              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          </div>

          <Footer />
        </Router>
      </ChakraProvider>
    </div>
  );
}

export default App;

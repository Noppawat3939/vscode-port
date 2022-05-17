import React from "react";
import { AppGlobalStyle, vscodeTheme } from "./styles/global/AppGlobalStyled";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Experiences from "./pages/experiences/Experiences";
import Projects from "./pages/projects/Projects";
import Theme from "./pages/theme/Theme";
import Error from "./pages/error/Error";
import Footer from "./components/footer/Footer";
import { ThemeProvider } from "styled-components";
import { useAppContext } from "./context/Context";

function App() {
  const { ...state } = useAppContext();

  return (
    <ThemeProvider theme={state.theme}>
      <AppGlobalStyle />
      <Navbar />
      <Sidebar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/themes" element={<Theme />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

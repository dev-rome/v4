import React from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import { useTheme } from "./context/ThemeContext";

const App: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <Layout>
        <Home />
        <About />
        <Work />
        <Contact />
      </Layout>
    </div>
  );
};

export default App;

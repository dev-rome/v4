import React from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import { useTheme } from "./context/ThemeContext";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;

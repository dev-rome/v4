import React from "react";
import Layout from "./components/Layout";
import { useTheme } from "./context/ThemeContext";

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={theme}>
      <Layout>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "dark" : "light"} mode
      </button>
        <div>
          <h2>Main Content</h2>
          <p>This is the main content area.</p>
        </div>
      </Layout>
    </div>
  );
};

export default App;

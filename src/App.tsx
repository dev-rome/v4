import React from "react";
import Layout from "./components/Layout";
import { useTheme } from "./context/ThemeContext";

const App: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <Layout>
        <div>
          <h2>Main Content</h2>
          <p>This is the main content area.</p>
        </div>
      </Layout>
    </div>
  );
};

export default App;

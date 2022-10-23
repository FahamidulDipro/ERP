import { Box } from "@mui/material";
import React, { useState, useEffect, createContext } from "react";
import {QueryClientProvider,QueryClient} from "react-query"
import "./App.css";
import Router from "./Components/Router/Router";
export const DarkmodeEnable = createContext();
const App = () => {
  const [isDark, setDark] = useState(false);
  const handleDarkMode = () => {
    setDark(true);
  };
  const handleLightMode = () => {
    setDark(false);
  };
const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <DarkmodeEnable.Provider
        value={{ isDark, handleDarkMode, handleLightMode }}
      >
        <Box>
          <Router />
        </Box>
      </DarkmodeEnable.Provider>
    </QueryClientProvider>

  );
};
export default App;

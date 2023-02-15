import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { ColorModeScript } from "@chakra-ui/react";
import Home from "./page/home";
import { chakraCustomTheme } from "./theme";
import { ChakraUIProvider } from "./theme/ui.provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ColorModeScript
      initialColorMode={chakraCustomTheme.config.initialColorMode}
    />
    <ChakraUIProvider>
      <Home />
    </ChakraUIProvider>
  </React.StrictMode>
);

reportWebVitals();

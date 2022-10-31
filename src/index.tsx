import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Pages } from "./Pages";
import pageTheme from "./assets/style/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
if (!root) throw new Error("root is not found");

root.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={pageTheme}>
      <Pages />
    </ThemeProvider>
  </React.StrictMode>
);

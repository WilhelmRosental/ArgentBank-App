"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/globalStyles";
import { theme } from "../styles/theme";

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body>
      <ThemeProvider theme={theme}>
        <GlobalStyles theme={theme} />
        {children}
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;

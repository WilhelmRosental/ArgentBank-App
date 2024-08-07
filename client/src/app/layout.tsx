"use client";

import { ReactNode } from "react";
import Link from "next/link";
import "@/fontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "../lib/registry";
import { GlobalStyles } from "@/styles/globalStyles";
import { theme } from "@/styles/theme";

import Header from "@/components/Header";

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body>
      <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>
          <GlobalStyles theme={theme} />
          <Header>
            <Link href="/login">
              <FontAwesomeIcon icon="user-circle" /> Sign In
            </Link>
          </Header>
          {children}
        </ThemeProvider>
      </StyledComponentsRegistry>
    </body>
  </html>
);

export default RootLayout;

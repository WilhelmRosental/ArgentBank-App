"use client";

import { ReactNode } from "react";
import Link from "next/link";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/globalStyles";
import { theme } from "../styles/theme";

import Header from "@/components/Header";

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body>
      <ThemeProvider theme={theme}>
        <GlobalStyles theme={theme} />
        <Header>
          <Link href="/login">
            <i className="fa fa-user-circle"></i> Sign In
          </Link>
        </Header>
        {children}
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;

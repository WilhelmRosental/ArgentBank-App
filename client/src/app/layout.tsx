"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import "@/fontAwesome";
import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "../lib/registry";
import { GlobalStyles } from "@/styles/globalStyles";
import { theme } from "@/styles/theme";
import { Provider } from "react-redux";
import { store } from "@/app/store";
import Header from "@/components/Header/index";
import Footer from "@/components/Footer/index";

const RootLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  const isLoginPage = pathname === "/login" || "/profile";

  return (
    <html lang="en">
      <body className={isLoginPage ? "login-page" : ""}>
        <Provider store={store}>
          <StyledComponentsRegistry>
            <ThemeProvider theme={theme}>
              <GlobalStyles theme={theme} />
              <Header />
              {children}
              <Footer />
            </ThemeProvider>
          </StyledComponentsRegistry>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;

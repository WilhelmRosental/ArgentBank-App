import React from "react";
import { IChildrenProps } from "../types";
import styled from "styled-components";
import Link from "next/link";

const HeaderContainer = styled.header`
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;

    a {
      font-weight: bold;
      color: #2c3e50;
    }
  }
`;

const MainNavItem = styled(Link)`
  text-decoration: none;
  margin-right: 0.5rem;
  border: none;
  font-weight: bold;
  color: #2c3e50;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const MainNavLogo = styled(Link)`
  display: flex;
  align-items: center;
`;

const MainNavLogoImage = styled.img`
  max-width: 100%;
  width: 200px;
`;

export default function Header({ children }: Readonly<IChildrenProps>) {
  return (
    <HeaderContainer>
      <nav>
        <MainNavLogo href="/">
          <MainNavLogoImage
            src="@/src/assets/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </MainNavLogo>
        {children}
      </nav>
    </HeaderContainer>
  );
}

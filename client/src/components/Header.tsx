import React from "react";
import { IChildrenProps } from "../types";
import Logo from "@/assets/argentBankLogo.png";
import styled from "styled-components";
import Image from "next/image";
// import Link from "next/link";

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

// const MainNavItem = styled(Link)`
//   text-decoration: none;
//   margin-right: 0.5rem;
//   border: none;
//   font-weight: bold;
//   color: #2c3e50;
//   font-size: 1rem;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

const MainNavLogo = styled.a`
  display: flex;
  align-items: center;
`;

const MainNavLogoImage = styled(Image)`
  max-width: 100%;
  width: 200px;
  object-fit: contain;
  height: max-content;
`;

export default function Header({ children }: Readonly<IChildrenProps>) {
  return (
    <HeaderContainer>
      <nav>
        <MainNavLogo href="/">
          <MainNavLogoImage src={Logo} alt="Argent Bank Logo" />
          {/* <h1 className="sr-only">Argent Bank</h1> */}
        </MainNavLogo>
        {children}
      </nav>
    </HeaderContainer>
  );
}

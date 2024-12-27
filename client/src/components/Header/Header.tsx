"use client";

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { getProfileData } from "@/app/store/selector";
import Link from "next/link";
import Logo from "@/assets/argentBankLogo.png";
import {
  HeaderContainer,
  MainNavLogo,
  MainNavLogoImage,
} from "./Header.styles";
import Logout from "@/components/Logout/index";

export default function Header() {
  const user = useSelector(getProfileData);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <HeaderContainer>
        <nav>
          <MainNavLogo href="/">
            <MainNavLogoImage src={Logo} alt="Argent Bank Logo" />
            <h1 className="sr-only">Argent Bank</h1>
          </MainNavLogo>
          <div>
            <Link href="/login">
              <FontAwesomeIcon icon="user-circle" /> Sign In
            </Link>
          </div>
        </nav>
      </HeaderContainer>
    );
  }

  return (
    <HeaderContainer>
      <nav>
        <MainNavLogo href="/">
          <MainNavLogoImage src={Logo} alt="Argent Bank Logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </MainNavLogo>
        <div>
          <Link href={user ? "/profile" : "/login"}>
            <FontAwesomeIcon icon="user-circle" />{" "}
            {user ? user.body?.firstName : "Sign In"}
          </Link>
          {user && <Logout />}
        </div>
      </nav>
    </HeaderContainer>
  );
}

import styled from "styled-components";
import Image from "next/image";

export const HeaderContainer = styled.header`
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

export const MainNavLogo = styled.a`
  display: flex;
  align-items: center;
`;

export const MainNavLogoImage = styled(Image)`
  max-width: 100%;
  width: 200px;
  object-fit: contain;
  height: max-content;
`;
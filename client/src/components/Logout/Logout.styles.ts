import Link from "next/link";
import styled from "styled-components";

export const MainNavItem = styled(Link)`
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
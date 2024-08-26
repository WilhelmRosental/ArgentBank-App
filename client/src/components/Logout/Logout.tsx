import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { MainNavItem } from "./Logout.styles";

interface ILogoutProps {
  children?: ReactNode;
}

export default function Logout({ children }: Readonly<ILogoutProps>) {
  const router = useRouter();
  const butonHandler = () => {
    localStorage.removeItem("Token");
    router.replace("/login");
  };
  return (
    <MainNavItem href="#" onClick={butonHandler}>
      Sign Out
    </MainNavItem>
  );
}

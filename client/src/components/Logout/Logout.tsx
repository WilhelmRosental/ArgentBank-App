import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { clearUser } from "@/app/store/userSlice"; // Action pour effacer l'utilisateur du store
import { MainNavItem } from "./Logout.styles";

interface ILogoutProps {
  children?: ReactNode;
}

export default function Logout({ children }: Readonly<ILogoutProps>) {
  const router = useRouter();
  const dispatch = useDispatch();

  const buttonHandler = () => {
    localStorage.removeItem("Token");

    dispatch(clearUser());

    router.push("/");
  };

  return (
    <MainNavItem href="#" onClick={buttonHandler}>
      Sign Out
    </MainNavItem>
  );
}

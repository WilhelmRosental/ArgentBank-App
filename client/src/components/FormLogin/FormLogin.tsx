import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUser, clearUser } from "@/app/store/userSlice";
import {
  useGetLoginTokenMutation,
  useGetProfilDataMutation,
} from "@/app/api/formLoginApi";
import {
  Form,
  InputWrapper,
  InputRemember,
  SignButton,
  ErrorMessage,
} from "./FormLogin.styles";
import { RootState } from "@/app/store";
import { useCallback } from "react";

const FormLogin = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState<string>("");

  const token = useSelector((state: RootState) => state.user.token);
  const [getLoginToken] = useGetLoginTokenMutation();
  const [getProfileData] = useGetProfilDataMutation();

  const fetchUserProfile = useCallback(
    async (token: string) => {
      try {
        const profileResult = await getProfileData({ token });
        if (profileResult) {
          dispatch(setUser(profileResult.data));
          setErrorMsg("");
          router.push("/profile");
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération du profil utilisateur",
          error
        );
        setErrorMsg("Error retrieving user profile");
      }
    },
    [dispatch, getProfileData, router]
  );

  useEffect(() => {
    if (token) {
      fetchUserProfile(token).catch((err) => console.error(err));
    }
  }, [token, fetchUserProfile]);

  const [credentials, setCredentials] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const [isChecked, setIsChecked] = useState<boolean>(false);

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const tokenResult = await getLoginToken({ body: credentials }).unwrap();

      console.log("CREDENTIALS : ", credentials);
      console.log("TOKENRESULT : ", tokenResult);

      if (tokenResult) {
        await handleTokenResult(tokenResult);
      }
    } catch (error) {
      console.error("Erreur lors de la mutation", error);
      setErrorMsg("Login failed, please try again.");
    }
  };

  const handleTokenResult = async (tokenResult: any) => {
    if (tokenResult && tokenResult.body && tokenResult.body.token) {
      const { token } = tokenResult.body;
      dispatch(setToken(token));
      await fetchUserProfile(token);
    } else {
      console.error("Erreur: Réponse inattendue", tokenResult);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputWrapper>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="email"
          value={credentials.email}
          onChange={handleChange}
        />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
      </InputWrapper>
      <InputRemember>
        <input type="checkbox" id="remember-me" onChange={checkHandler} />
        <label htmlFor="remember-me">Remember me</label>
      </InputRemember>

      <SignButton type="submit">Sign In</SignButton>
      {errorMsg ? <ErrorMessage>{errorMsg}</ErrorMessage> : ""}
    </Form>
  );
};

export default FormLogin;

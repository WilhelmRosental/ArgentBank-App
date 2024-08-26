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

const FormLogin = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState<string>("");

  const token = useSelector((state: RootState) => state.user.token);

  useEffect(() => {
    if (token) {
      fetchUserProfile(token).catch((err) => console.error(err));
    }
  }, [token]);

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

  const [getLoginToken] = useGetLoginTokenMutation();
  const [getProfileData] = useGetProfilDataMutation();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const tokenResult = await getLoginToken({ body: credentials });

      console.log("CREDENTIALS : ", credentials);
      console.log("TOKENRESULT : ", tokenResult);

      if (tokenResult) {
        await handleTokenResult(tokenResult.data);
      }
    } catch (error) {
      console.error("Erreur lors de la mutation", error);
      setErrorMsg("Login failed, please try again.");
    }
  };

  const handleTokenResult = async (tokenResult: {
    body: { token: string };
  }) => {
    const { token } = tokenResult.body;
    dispatch(setToken(token));
    await fetchUserProfile(token);
  };

  const fetchUserProfile = async (token: string) => {
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

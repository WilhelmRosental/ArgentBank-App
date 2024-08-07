"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import FormLogin from '../../components/FormLogin';
import { Main, SignContent } from "../../styles/pages/Login";

export default function Login() {
  return (
    <>
      <Main>
        <SignContent>
          <FontAwesomeIcon icon="user-circle" />
          <h1>Sign In</h1>
          {/* <FormLogin /> */}
        </SignContent>
      </Main>
    </>
  );
}

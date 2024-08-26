"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation"; // Import de useRouter
import { useSelector } from "react-redux";
import { getProfileData } from "@/app/store/selector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormLogin from "@/components/FormLogin";
import { Main, SignContent } from "@/styles/pages/Login";

export default function Login() {
  const user = useSelector(getProfileData);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.replace("/profile");
    }
  }, [router, user]);

  return (
    <>
      <Main>
        <SignContent>
          <FontAwesomeIcon icon="user-circle" />
          <h1>Sign In</h1>
          <FormLogin />
        </SignContent>
      </Main>
    </>
  );
}

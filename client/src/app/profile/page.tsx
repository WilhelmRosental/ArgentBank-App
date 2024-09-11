"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { getProfileData } from "@/app/store/selector";
import EditName from "@/components/EditName/index";
import {
  Main,
  HeaderContainer,
  Title,
  Account,
  AccountWrapper,
  AccountTitle,
  AccountAmount,
  AccountDescription,
  TransactionButton,
} from "@/styles/pages/User";

export default function Profile() {
  const user = useSelector(getProfileData);
  const router = useRouter();
  const [isHydrated, setIsHydrated] = useState(false); // Nouvel état pour vérifier si le composant est hydraté

  useEffect(() => {
    setIsHydrated(true); // Le composant est hydraté
    if (!user) {
      router.replace("/login"); // Redirection si l'utilisateur n'est pas connecté
    }
  }, [router, user]);

  // Si l'utilisateur n'est pas encore hydraté ou s'il n'existe pas, on affiche "Loading"
  if (!isHydrated || !user) {
    return <Main>Loading...</Main>;
  }

  // Rendu des informations utilisateur seulement après l'hydratation
  return (
    <Main>
      <HeaderContainer>
        <Title>
          Welcome back
          <br />
          {`${user?.body?.firstName} ${user?.body?.lastName}!`}
        </Title>
        <EditName />
      </HeaderContainer>
      <h2 className="sr-only">Accounts</h2>
      <Account>
        <AccountWrapper>
          <AccountTitle>Argent Bank Checking (x8349)</AccountTitle>
          <AccountAmount>$2,082.79</AccountAmount>
          <AccountDescription>Available Balance</AccountDescription>
        </AccountWrapper>
        <AccountWrapper className="cta">
          <TransactionButton>View transactions</TransactionButton>
        </AccountWrapper>
      </Account>
      <Account>
        <AccountWrapper>
          <AccountTitle>Argent Bank Saving (x6712)</AccountTitle>
          <AccountAmount>$10,928.42</AccountAmount>
          <AccountDescription>Available Balance</AccountDescription>
        </AccountWrapper>
        <AccountWrapper className="cta">
          <TransactionButton>View transactions</TransactionButton>
        </AccountWrapper>
      </Account>
      <Account>
        <AccountWrapper>
          <AccountTitle>Argent Bank Credit Card (x8349)</AccountTitle>
          <AccountAmount>$184.30</AccountAmount>
          <AccountDescription>Current Balance</AccountDescription>
        </AccountWrapper>
        <AccountWrapper className="cta">
          <TransactionButton>View transactions</TransactionButton>
        </AccountWrapper>
      </Account>
    </Main>
  );
}

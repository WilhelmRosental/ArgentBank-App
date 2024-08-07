"use client";

import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { getProfileData } from "../../app/selector";
// import Logout from "../../components/Logout";
// import EditName from "../../components/EditName";
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
} from "../../styles/pages/User";

export default function User() {
  //   const user = useSelector(getProfileData);
  //   const navigate = useNavigate();

  //   useEffect(() => {
  //     if (!user) {
  //       navigate("/login");
  //     }
  //   }, [navigate, user]);

  return (
    <>
      <Main>
        <HeaderContainer>
          {/* <Title>
            Welcome back
            <br />
            {`${user?.body?.firstName} ${user?.body?.lastName}!`}
          </Title> */}
          {/* <EditName /> */}
          <p>Test</p>
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
    </>
  );
}

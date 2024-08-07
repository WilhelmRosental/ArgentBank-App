"use client";

import React from "react";
import IconSecurity from "@/assets/icon-security.png";
import IconChat from "@/assets/icon-chat.png";
import IconMoney from "@/assets/icon-money.png";
import {
  Main,
  Banner,
  BannerContent,
  Subtitle,
  Text,
  Features,
  FeatureIcon,
  FeatureItem,
  FeatureItemTitle,
} from "../styles/pages/Home";

export default function Home() {
  return (
    <>
      <Main>
        <Banner>
          <BannerContent>
            <h2 className="sr-only">Promoted Content</h2>
            <Subtitle>No fees.</Subtitle>
            <Subtitle>No minimum deposit.</Subtitle>
            <Subtitle>High interest rates.</Subtitle>
            <Text>Open a savings account with Argent Bank today!</Text>
          </BannerContent>
        </Banner>
        <Features>
          <h2 className="sr-only">Features</h2>
          <FeatureItem>
            <FeatureIcon src={IconChat} alt="Chat Icon" />
            <FeatureItemTitle>You are our #1 priority</FeatureItemTitle>
            <p>
              Need to talk to a representative? You can get in touch through our
              24/7 chat or through a phone call in less than 5 minutes.
            </p>
          </FeatureItem>
          <FeatureItem>
            <FeatureIcon src={IconMoney} alt="Check Shield Icon" />
            <FeatureItemTitle>More savings means higher rates</FeatureItemTitle>
            <p>
              The more you save with us, the higher your interest rate will be!
            </p>
          </FeatureItem>
          <FeatureItem>
            <FeatureIcon src={IconSecurity} alt="Chat Icon" />
            <FeatureItemTitle>Security you can trust</FeatureItemTitle>
            <p>
              We use top of the line encryption to make sure your data and money
              is always safe.
            </p>
          </FeatureItem>
        </Features>
      </Main>
    </>
  );
}

"use client";

import React from "react";
import { OnchainKitProvider } from "@coinbase/onchainkit";
import { base } from "viem/chains";

export default function OnchainKitProviderComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <OnchainKitProvider
      apiKey={process.env.NEXT_PUBLIC_ONCHAIN_KIT_CLIENT_API_KEY!}
      chain={base}
      miniKit={{
        enabled: true,
      }}
      config={{
        appearance: {
          mode: "auto", // 'light' | 'dark' | 'auto'
        },
        wallet: {
          display: "modal", // 'modal' | 'drawer'
          preference: "all", // 'all' | 'smartWalletOnly' | 'eoaOnly'
        },
      }}
    >
     {children}
    </OnchainKitProvider>
  );
}

"use client";

import OnchainKitProvider from "./onchain-kit.provider";

export default function RootProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <OnchainKitProvider>{children}</OnchainKitProvider>;
}

import { ConnectWallet, Wallet, WalletDropdown } from "@coinbase/onchainkit/wallet";
import React from "react";

export default function WalletDemo() {
  return (
    <Wallet>
      <ConnectWallet />
      <WalletDropdown />
    </Wallet>
  );
}

import { createContext, FunctionComponent, useState, useContext } from "react";
import { createDefaultState, Web3State } from "./utils";
// import { MetaMaskInpageProvider } from "@metamask/providers";
// import { Contract, providers } from "ethers";

// export type Web3State = {
//   ethereum?: MetaMaskInpageProvider;
//   provider?: providers.Web3Provider;
//   contract?: Contract;
// };

const Web3Context = createContext<Web3State>(createDefaultState());

const Web3Provider: FunctionComponent = ({ children }) => {
  const [web3Api, setWeb3Api] = useState<Web3State>(createDefaultState());
  return (
    <Web3Context.Provider value={web3Api}>{children}</Web3Context.Provider>
  );
};

export function useWeb3() {
  return useContext(Web3Context);
}

export default Web3Provider;

import { createContext, FunctionComponent, useState, useContext } from "react";

const Web3Context = createContext<any>(null);

const Web3Provider: FunctionComponent = ({ children }) => {
  const [web3Api, setWeb3Api] = useState({ test: "Hello From Providerr" });
  return (
    <Web3Context.Provider value={web3Api}>{children}</Web3Context.Provider>
  );
};

export function useWeb3() {
  return useContext(Web3Context);
}

export default Web3Provider;

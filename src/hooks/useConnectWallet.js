import { useWeb3React } from '@web3-react/core';
import metamaskConnector from 'providers/Metamask';
import walletconnectConnector from 'providers/WalletConnect';
import { useEffect, useMemo, useState } from 'react';
import Web3 from 'web3';

export default function useConnectWallet() {
  const { activate, library, chainId, account, active, deactivate, setError } = useWeb3React();
  const [balance, setBalance] = useState(0);
  const init = async () => {
    try {
      activate(metamaskConnector);
    } catch (error) {
      setError(error);
    }
  };

  const getBalance = async () => {
    try {
      const web3 = new Web3(library);
      const accBalance = await web3.eth.getBalance(account);
      setBalance(accBalance);
    } catch (err) {
      console.log(err, '@error');
    }
  };

  useEffect(() => {
    if (account === '' || account === undefined) {
      init();
    }
  }, [null]);

  useEffect(() => {
    if (account !== '' && active) {
      getBalance();
    }
  }, [account]);

  const connectToMetamask = async () => {
    try {
      activate(metamaskConnector);
    } catch (error) {
      setError(error);
    }
  };

  const connectToWalletConnect = async () => {
    try {
      activate(walletconnectConnector);
    } catch (error) {
      setError(error);
    }
  };

  const disconnect = async () => {
    try {
      deactivate();
    } catch (error) {
      setError(error);
    }
  };

  if (active) {
    return useMemo(
      () => ({
        library,
        chainId,
        account,
        active,
        connectToMetamask,
        connectToWalletConnect,
        disconnect,
        balance,
      }),
      [active, account, balance]
    );
  }
  return useMemo(
    () => ({
      library: null,
      chainId: 0,
      account: '',
      active: false,
      connectToMetamask,
      connectToWalletConnect,
      disconnect,
      balance,
    }),
    [active, account, balance]
  );
}

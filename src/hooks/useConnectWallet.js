import { useWeb3React } from '@web3-react/core';
import metamaskConnector from 'providers/Metamask';
import walletconnectConnector from 'providers/WalletConnect';
import { useEffect } from 'react';

export default function useConnectWallet() {
  const { activate, library, chainId, account, active, deactivate, setError } = useWeb3React();

  const init = async () => {
    try {
      await activate(metamaskConnector);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    init();
    console.log(account);
  }, [account]);

  const connectToMetamask = async () => {
    try {
      await activate(metamaskConnector);
    } catch (error) {
      setError(error);
    }
  };

  const connectToWalletConnect = async () => {
    try {
      await activate(walletconnectConnector);
    } catch (error) {
      setError(error);
    }
  };

  const disconnect = async () => {
    try {
      await disconnect();
    } catch (error) {
      setError(error);
    }
  };

  if (account !== '') {
    return {
      library,
      chainId,
      account,
      active,
      connectToMetamask,
      connectToWalletConnect,
      disconnect,
    };
  }
  return {
    library: null,
    chainId: 0,
    account: '',
    active: false,
    connectToMetamask,
    connectToWalletConnect,
    disconnect,
  };
}

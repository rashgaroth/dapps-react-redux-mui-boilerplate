import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { WCCHAIN } from 'utilities/web3/chains';

const walletconnectConnector = new WalletConnectConnector({
  qrcode: true,
  rpc: WCCHAIN,
  bridge: 'https://bridge.walletconnect.org',
});

export default walletconnectConnector;

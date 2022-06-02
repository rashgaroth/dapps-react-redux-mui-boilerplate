import { InjectedConnector } from '@web3-react/injected-connector';

const metamaskConnector = new InjectedConnector({ supportedChainIds: [56, 97, 1, 3, 4, 5] });
export default metamaskConnector;

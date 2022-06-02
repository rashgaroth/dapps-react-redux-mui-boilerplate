export const CHAINS = {
  56: {
    urls: ['https://bsc-dataseed1.defibit.io'],
    name: 'Mainnet',
  },
  97: {
    urls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
    name: 'Testnet',
  },
};

export const WCCHAIN = {
  56: 'https://bsc-dataseed1.defibit.io',
  97: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
};

export const URLS = Object.keys(CHAINS).reduce((accumulator, chainId) => {
  const validURLs = CHAINS[Number(chainId)].urls;

  if (validURLs.length) {
    accumulator[Number(chainId)] = validURLs;
  }

  return accumulator;
}, {});

function isExtendedChainInformation(chainInformation) {
  return !!chainInformation.nativeCurrency;
}

export function getAddChainParameters(chainId) {
  const chainInformation = CHAINS[chainId];
  if (isExtendedChainInformation(chainInformation)) {
    return {
      chainId,
      chainName: chainInformation.name,
      nativeCurrency: chainInformation.nativeCurrency,
      rpcUrls: chainInformation.urls,
      blockExplorerUrls: chainInformation.blockExplorerUrls,
    };
  }
  return chainId;
}

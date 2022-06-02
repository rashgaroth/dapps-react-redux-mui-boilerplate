import './styles/global/App.css';
import RenderRoutes from 'routes/routes';
import { StyledEngineProvider, CssBaseline, ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';
// eslint-disable-next-line import/no-named-as-default
import theme from 'themes';
import { NavbarComponent } from 'components';
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';

function App() {
  const globalState = useSelector(state => state.globalReducer);
  const getLibrary = provider => {
    const library = new Web3(provider);
    return library;
  };
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme({ customization: globalState })}>
          <CssBaseline />
          <NavbarComponent>
            <RenderRoutes />
          </NavbarComponent>
        </ThemeProvider>
      </StyledEngineProvider>
    </Web3ReactProvider>
  );
}

export default App;

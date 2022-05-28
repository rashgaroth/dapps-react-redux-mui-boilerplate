import './styles/global/App.css';
import RenderRoutes from 'routes/routes';
import { StyledEngineProvider, CssBaseline, ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';
// eslint-disable-next-line import/no-named-as-default
import theme from 'themes';
import { NavbarComponent } from 'components';

function App() {
  const globalState = useSelector(state => state.globalReducer);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme({ customization: globalState })}>
        <CssBaseline />
        <NavbarComponent>
          <RenderRoutes />
        </NavbarComponent>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;

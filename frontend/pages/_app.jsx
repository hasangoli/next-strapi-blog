import { wrapper } from '@/store';
import { ThemeProvider, createTheme } from '@mui/material';
import { Provider } from 'react-redux';
// Imported Styles
import '@/styles/globals.css';

export default function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);

  const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#0000ff',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...props.pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

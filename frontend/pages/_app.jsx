import { wrapper } from '@/store';
import { ThemeProvider, createTheme } from '@mui/material';
import { Provider } from 'react-redux';
// Imported Styles
import AppLayout from '@/components/Layouts/App';
import '@/styles/globals.css';

export default function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);

  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#FEBC35',
      },
    },
  });

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppLayout>
          <Component {...props.pageProps} />
        </AppLayout>
      </ThemeProvider>
    </Provider>
  );
}

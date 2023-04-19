import AppLayout from '@/components/AppLayout';
import { wrapper } from '@/store';
import { Provider } from 'react-redux';
// Imported Styles
import '@/styles/globals.css';

export default function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <AppLayout>
        <Component {...props.pageProps} />
      </AppLayout>
    </Provider>
  );
}

import { Provider } from 'react-redux';
import MainLayout from '../layouts/MainLayout';
import '../styles/global.scss';
import store from '../store/store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
}

export default MyApp;

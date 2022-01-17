import MainLayout from '../layouts/MainLayout';
import { wrapper } from './../store/store';
import '../styles/global.scss';

function WrappedApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default wrapper.withRedux(WrappedApp);

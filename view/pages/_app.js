import '../styles/globals.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import Router from 'next/router';
import ProgressBar from '@badrap/bar-of-progress';
import { Provider } from 'react-redux';
import store from '../store';

const progress = new ProgressBar({
  size: 4,
  color: '#FE595E',
  className: 'z-50',
  delay: 100,
});

// Router.events.on whenever there is a change on router it dispatches a action
Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

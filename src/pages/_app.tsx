import React from 'react';
import ReactDOM from 'react-dom';
import App, { AppProps } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';

import PageChange from 'src/components/PageChange/PageChange.js';
import { Provider } from 'react-redux';
import store from 'src/redux/store';

import 'assets/plugins/nucleo/css/nucleo.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'assets/scss/nextjs-argon-dashboard.scss';

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`);
  document.body.classList.add('body-page-transition');
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById('page-transition'),
  );
});
Router.events.on('routeChangeComplete', () => {
  ReactDOM.unmountComponentAtNode(document.getElementById('page-transition'));
  document.body.classList.remove('body-page-transition');
});
Router.events.on('routeChangeError', () => {
  ReactDOM.unmountComponentAtNode(document.getElementById('page-transition'));
  document.body.classList.remove('body-page-transition');
});

interface CustomAppProps extends Omit<AppProps, 'Component'> {
  Component: AppProps['Component'] & { layout: JSX.Element };
}

export default function MevDashboardApp({
  Component,
  pageProps,
}: CustomAppProps) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);

  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Mev Dashboard</title>
        <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </React.Fragment>
  );
}

// static async getInitialProps({ Component, router, ctx }) {
//   let pageProps = {};

//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx);
//   }

//   return { pageProps };

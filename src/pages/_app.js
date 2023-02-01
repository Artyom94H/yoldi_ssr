import { useEffect } from 'react';
import { ConfigProvider } from 'antd';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Router from 'next/router';
import axios from 'axios';
import '@/styles/globals.scss';
import 'antd/dist/reset.css';
import UIHelper from '@/helpers/UIHelper';
import AuthProvider from '@/context/auth';
import ruRU from 'antd/locale/ru_RU';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    axios.interceptors.response.use(
      (response) => {
        // TODO set toast notification for all success requests
        return response;
      },
      (error) => {
        if (error?.response?.status >= 500) {
          UIHelper.serverError();
        }
        return Promise.reject(error);
      },
    );

    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    Router.events.on('routeChangeStart', handleRouteStart);
    Router.events.on('routeChangeComplete', handleRouteDone);
    Router.events.on('routeChangeError', handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      Router.events.off('routeChangeStart', handleRouteStart);
      Router.events.off('routeChangeComplete', handleRouteDone);
      Router.events.off('routeChangeError', handleRouteDone);
    };
  }, []);
  return (
    <>
      <AuthProvider>
        <ConfigProvider
          locale={ruRU}
          theme={{
            components: {
              Input: {},
            },
            token: {
              colorPrimary: '#D4D4D4',
            },
          }}
        >
          <Component {...pageProps} />
        </ConfigProvider>
      </AuthProvider>

    </>
  );
}

import "./globals.css";
import { AppProps } from "next/app";
import { persistor, store } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ("serviceWorker" in navigator && window) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then((registration) => {
            console.log(
              "ServiceWorker registration successful with scope: ",
              registration.scope
            );
          })
          .catch((error) => {
            console.log("ServiceWorker registration failed: ", error);
          });
      });
    }
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;

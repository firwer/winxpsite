import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { Analytics } from "@vercel/analytics/react";
const Tahoma = localFont({
  src: [
    {
      path: "../../fonts/Tahoma Bold V1.woff",
      weight: "700",
      style: "bold",
    },
    {
      path: "../../fonts/Tahoma V1.woff",
      weight: "400",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={Tahoma.className}>
      <Provider store={store}>
        <Component {...pageProps} />
        <Analytics />
      </Provider>
    </main>
  );
}

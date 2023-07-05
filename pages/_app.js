import { Provider } from "react-redux";
import store from "@/store";
import "@/styles/globals.css";
import NavbarComponent from "@/components/Nav";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <NavbarComponent />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

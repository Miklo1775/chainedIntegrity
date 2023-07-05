import "@/styles/globals.css";
import NavbarComponent from "@/components/Nav";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavbarComponent />
      <Component {...pageProps} />
    </>
  );
}

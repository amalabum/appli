import "@/styles/globals.css";
// import "bootstrap/dist/css/bootstrap.css";
import { SSRProvider } from "react-bootstrap";

export default function App({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}

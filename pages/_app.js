//import TopNav from "../component/TopNav";
import TopNav from "../component/TopNav";
import "../styles/globals.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";
import "../styles/navbar.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "../context";
import Footer from "../component/footer/footer";
function MyApp({ Component, pageProps }) {
  return (
    <>
      {typeof window !== "undefined" && (
        <Provider>
          <ToastContainer position="top-center" />
          <TopNav />
          <Component {...pageProps} />
          <Footer/>
        </Provider>
      )}
    </>
  );
}

export default MyApp;

//import TopNav from "../component/TopNav";
import TopNav from '../component/TopNav';
import '../styles/globals.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/style.css';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Provider} from "../context";
function MyApp({ Component, pageProps }) {
 
  return (
    <Provider>
    <ToastContainer position="top-center" />
    <TopNav />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

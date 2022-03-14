//import TopNav from "../component/TopNav";
import TopNav from '../client/component/TopNav';
import '../styles/globals.css';
function MyApp({ Component, pageProps }) {
 
  return (
    <>
    <TopNav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

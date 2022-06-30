import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import Link from "next/Link";
import { Context } from "../context";
import { useRouter } from "next/router";
import {FcGoogle} from "react-icons/fa"
import AuthLayout from "../component/layout/authLayout/authLayout";
import {GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
import {auth} from '../config/firebase'

const Login = () => {
  const userLoginData = localStorage.getItem("loginDetails");
  const loginData = JSON.parse(userLoginData);
  console.log("logindata", loginData);
  const [email, setEmail] = useState(loginData ? loginData.email : "pranatipradhannew@gmail.com");
  const [password, setPassword] = useState(loginData ? loginData.password : "Rinky123@");
  const [remember, setRememberMe] = useState(loginData ? true : false);
  const [loading, setLoading] = useState(false);
  const [snackBar,setSnackBar]= useState("")

  const {
    state: { user },
    dispatch,
  } = useContext(Context);
  //const{user}= state;
  const router = useRouter();
  useEffect(() => {
    if (user !== null) router.push("/");
  }, [user]);

  const onCheckRememberMe = (e) => {
    console.log("e", e);
    const loginDatas = {
      email: email,
      password: password,
    };
    if (e.target.checked) {
      setRememberMe(true);
      localStorage.setItem("loginDetails", JSON.stringify(loginDatas));
    } else {
      setRememberMe(false);
      localStorage.removeItem("loginDetails");
    }
  };
  const handleSubmit = async (e,user) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data = await axios.post(`/api/login`, {
        email:user?user.email:email,
        password:user?'':password
      });
       console.log("LOGIN RESPONSE", data);
      //setLoading(false);
      dispatch({
        type: "LOGIN",
        payload: data,
      });
      window.localStorage.setItem("user", JSON.stringify(data));
      router.push("/user");
    } catch (err) {
      toast(err.response.data);
      setLoading(false);
    }
  };
  const provider = new GoogleAuthProvider();

  
  const googleLogin = async (e) => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        console.log("user from google login", user);
        if (user) {
          handleSubmit(e,user)
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        setSnackBar({
          ...snackBar,
          open: true,
          severity: "error",
          message: error.message ? error.message : "something went wrong",
        });
      });
  };

  return (
    <>
    <AuthLayout>
      
              <div className="card-body px-4 py-2 px-lg-5 py-lg-2 text-black">
                  {/* <div className=" d-flex align-items-center mb-3 pb-1"> */}
                    <h1 className="h1 fw-bold mb-0 text-center pb-4">Login</h1>
                  {/* </div> */}
                  <form onSubmit={handleSubmit}>
                    <input
                      type="email"
                      className="form-control mb-4 p-3"
                      value={email}
                      // style={{marginTop:"-10px"}}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter email"
                      required
                    />

                    <input
                      type="password"
                      className="form-control mb-4 p-3"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter password"
                      required
                    />
                   
                    <div className="d-flex justify-content-between align-items-center">
                     <div className="form-check"> 
                        <input
                          className="form-check-input"
                          onChange={onCheckRememberMe}
                          type="checkbox"
                          value="remember"
                          id="form1Example3"
                          checked={remember}
                        />
                        <label className="form-check-label" htmlFor="form1Example3">
                          {" "}
                          Remember me{" "}
                        </label>
                    </div>
                    <Link href="/forgot-password">
                      <a className="text-danger">Forgot password</a>
                    </Link>
                    </div>
                     <div className="d-grid pt-4 mb-4 w-100 px-6">
                      <button
                        className="btn btn-lg btn-block"
                        style={{backgroundColor: "#17bf9e",color:"white"}}
                        type="submit"
                        disabled={!email || !password || loading}
                      >
                        {loading ? <SyncOutlined spin /> : "Login"}
                      </button>
                    </div>
                     </form>
                    
                  <div className= "divide align-items-center  my-4">
                  <p className="text-center fw-bold mx-10 mb-0 text-muted">OR</p>
                   </div>
                     <div className="d-grid pt-2 mb-2 w-100 px-6">
                     <button className="btn btn-lg btn-danger btn-block "
                      type="submit" onClick={googleLogin}>
                            <i class="FcGoogle"></i>
                       Login with google
                       </button>
                 
                     </div>
                  <p className="text-center pt-3">
                    Not yet registered?{""}
                    <Link href="/register">
                      <a>Register</a>
                    </Link>
                  </p>
                </div>
                </AuthLayout>         
    </>
   
  );
};
export default Login;

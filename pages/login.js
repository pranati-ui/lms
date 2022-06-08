import { useState,useContext,useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import Link from "next/Link";
import { Context } from "../context";
import { useRouter } from "next/router";
const Login = () => {
  const [email, setEmail] = useState("pranatipradhannew@gmail.com");
  const [password, setPassword] = useState("rinky123");
  const [loading, setLoading] = useState(false);
  const{state: {user}
  ,dispatch,}=useContext(Context);
  //const{user}= state;
const router = useRouter();
useEffect(() => {
if(user !== null)router.push("/");
},[user]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data = await axios.post(`/api/login`,
        {
          email,
          password,
        }
      );
     // console.log("LOGIN RESPONSE", data);
      //setLoading(false);
      dispatch({
        type:"LOGIN",
        payload:data,

      });
      window.localStorage.setItem('user',JSON.stringify(data));
      router.push("/user");
    } catch (err) {
       
      toast(err.response.data);
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className=" square text-center">Login</h1>

      <div className="container col-md-4 offset-md-4 pb-5">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-control mb-4 p-3"
            value={email}
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

          <button
            type="submit"
             className="btn btn-success btn-block"
             state={{width:"100%"}}
            disabled={!email || !password || loading}
          >
            {loading ? <SyncOutlined spin /> : "Login"}
          </button>
        </form>
        <p className="text-center pt-3">
          Not yet registered?{""}
          <Link href="/register">
            <a>Register</a>
            </Link>
          </p>
          <p className="text-center">
          <Link href="/forgot-password">
            <a className="text-danger">Forgot password</a>
            </Link>
          </p>

      </div>
    </>
  );
};
export default Login;

 
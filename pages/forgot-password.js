import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import { Context } from "../context";
import { useRouter } from "next/router";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    state: { user },
  } = useContext(Context);
  const router = useRouter();
  useEffect(() => {
    if (user !== null) router.push("/");
  }, [user]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post("/api/forgot-password", { email });
      setSuccess(true);
      toast("Check your email from the secret code");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast(err.response.data);
    }
  };
  const handleResetPassword = async (e) => {
    e.preventDefault();
    // console.log(email,code,newPassword);
    //return;
    try {
      setLoading(true);
      const { data } = await axios.post("/api/reset-password", {
        email,
        code,
        newPassword,
      });
      setEmail("");
      setCode("");
      setNewPassword("");
      setLoading(false);
      toast("Great! now you can login with you new password");
    } catch (err) {
      setLoading(false);
      toast(err.response.data);
    }
  };
  return (
    <>
  <div style={{ height: "100vh"}}>
          <h1 className="h1 fw-bold mb-0 text-center pb-4" style={{paddingTop:"100px",color:"blue"}}>
        Reset Password
      </h1>
      <div
        className="container col-md-4 offset-md-4 pb-2Ks"
        style={{ marginTop: "60px" }}
      >
         
        <form onSubmit={success ? handleResetPassword : handleSubmit}>
          <input
            type="email"
            className="form-control mb-4 p-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
          {success && (
            <>
              <input
                type="text"
                className="form-control mb-4 p-4"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter secret code"
                required
              />
              <input
                type="password"
                className="form-control mb-4 p-4"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="New password"
                required
              />
            </>
          )}
          <br />
          <div className="d-grid gap-2"style={{marginBottom:"10px",paddingTop:"3px",backgroundColor:"#17bf9e",}}>
            <button
              type="submit"
              className="btn  btn-block p-2 display"
              style={{color:"white"}}
              disabled={loading || !email}
            >
              {loading ? <SyncOutlined spin /> : "Submit"}
            </button>
          </div>
        </form>
      </div>
     </div>
    </>
  );
};
export default ForgotPassword;

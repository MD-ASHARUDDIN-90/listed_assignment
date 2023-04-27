import style from "./SignIn.module.css";
import { FcGoogle } from "react-icons/fc";
import { GrApple } from "react-icons/gr";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const {user, loginWithRedirect } = useAuth0();
  console.log(user)
  const nav = useNavigate()
  // useEffect(()=>{
  //   if(user !== undefined){
     
  //   }
  // },[])

  const handleLogin = ()=>{
 loginWithRedirect()
 nav("/dashboard")
  }
  return (
    <div className={style.container}>
      <div className={style.leftContainer}>
        <span>Board.</span>
      </div>

      <div className={style.rightContainer}>
        <div className={style.headingContainer}>
          <h1>Sign In</h1>
          <p>Sign in to your account</p>
        </div>

        <div className={style.buttonContainer}>
          <button onClick={handleLogin}>
            <FcGoogle className={style.googleIcon} />{" "}
            <span>Sign in with Google</span>
          </button>
          <button>
            <GrApple className={style.appleIcon} />{" "}
            <span>Sign in with Apple</span>
          </button>
        </div>

        <div className={style.formContainer}>
          <form>
            <div>
              <label type="email" htmlFor="email">
                Email address
              </label>
              <input placeholder="jhondoe@gmail.com" />
            </div>
            <div>
              <label type="password" htmlFor="password">
                Password
              </label>
              <input placeholder="Password" />
            </div>
            <div className={style.forgotText}>
              <label>Forgot password?</label>
            </div>
            <button className={style.btn}>Sign In</button>
          </form>
        </div>

        <div className={style.register}>
        <p>Don't have an account? <span>Register here</span></p>
        </div>
      </div>
    </div>
  );
}

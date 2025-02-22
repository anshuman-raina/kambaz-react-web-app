import { Link } from "react-router-dom";
export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <input id="wd-username" placeholder="username" className="form-control mb-2"/> <br />
      <input id="wd-password" placeholder="password" type="password" className="form-control mb-2" /> <br />
      <Link id="wd-signin-btn" to="/Kambaz/Dashboard" className="btn btn-primary w-100">
        Sign in
      </Link>
      <br />
      <Link id="wd-signup-link" to="/Kambaz/Account/Signup">
        Sign up
      </Link>
    </div>

);}


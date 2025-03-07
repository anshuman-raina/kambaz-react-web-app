import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  const { pathname } = useLocation();
  useSelector((state: any) => state.accountReducer);
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link id="wd-account-signin-link" to={`/Kambaz/Account/Signin`}
        className={`list-group-item border border-0 ${pathname.includes("Signin") ? "active" : "text-danger"}`}>Signin</Link>
      <Link id="wd-account-signup-link" to={`/Kambaz/Account/Signup`}
        className={`list-group-item border border-0 ${pathname.includes("Signup") ? "active" : "text-danger"}`}>Signup</Link>
      <Link id="wd-account-profile-link" to={`/Kambaz/Account/Profile`}
        className={`list-group-item border border-0 ${pathname.includes("Profile") ? "active" : "text-danger"}`}>Profile</Link>
    </div>
  );
}
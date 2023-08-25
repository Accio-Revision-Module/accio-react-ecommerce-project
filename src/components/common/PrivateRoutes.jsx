import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <div className="main">Loading...</div>;
  }
  if (error) {
    return <div className="main">Error: {error.toString()}</div>;
  }
  if (user) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
}

export default PrivateRoutes;

import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  if (loading) {
    return <>Loading...</>;
  }
  if (error) {
    return <>Error: {error.toString()}</>;
  }
  return (
    <div className="main">
      <div className="p-4">
        <h1 className="text-5xl font-bold">Profile</h1>
        <hr className="w-16 mt-8" />
        <div className="mt-6">Email: {user.email}</div>
        <div className="mt-6">uid: {user.uid}</div>
        <button className="bg-red-500 rounded mt-6" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;

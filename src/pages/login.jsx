import { signInWithEmailAndPassword } from "firebase/auth";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      navigate("/profile");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="main flex-column justify-center items-center">
      <h1 className="text-5xl text-center font-bold">Login</h1>
      <div className="w-100 mt-6 flex justify-center">
        <input
          ref={emailRef}
          className="p-2 text-lg rounded w-1/5"
          type="email"
          placeholder="Enter your email"
        />
      </div>

      <div className="w-100 mt-6 flex justify-center">
        <input
          ref={passwordRef}
          className="p-2 text-lg rounded w-1/5"
          type="password"
          placeholder="Enter your password"
        />
      </div>
      <div className="w-100 mt-6 flex justify-center">
        <button className="rounded" onClick={handleSubmit}>
          Login
        </button>
      </div>

      <div className="text-center">
        Do not have an account? <Link to="/register">Register here.</Link>
      </div>
    </div>
  );
}

export default Login;

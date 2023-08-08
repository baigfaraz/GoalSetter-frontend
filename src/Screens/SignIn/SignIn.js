import "../../config/config-firebase";
import { auth, googleProvider } from "../../config/config-firebase";
import { useEffect, useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import {useToken} from '../../context/tokenContext';

function SignIn() {
  
  const { token, setToken } = useToken();

  const [Auth, setAuth] = useState(
    false || window.localStorage.getItem("auth") === "true"
  );
  // const [token, setToken] = useState("");
  const backgroundImageUrl =
    "https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60";

  useEffect(() => {
    auth.onAuthStateChanged((userCred) => {
      if (userCred) {
        setAuth(true);
        window.localStorage.setItem("auth", "true");
        userCred.getIdToken().then((token) => {
          setToken(token);
        });
      }
    });
  }, [setToken]);
  const handleSignInWithGoogle = () => {
    auth.signInWithPopup(googleProvider).then((userCred) => {
      if (userCred) {
        setAuth(true);
      }
    });
  };
  return (
    <>
      {Auth ? (
        <Dashboard token={token}/>
      ) : (
        <div
          className="container"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        >
          <div className="center">
            <button className="button" onClick={handleSignInWithGoogle}>
              {/* <Link to={'/Dashboard'} className="button"> */}
              Sign in with Google
              {/* </Link> */}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default SignIn;

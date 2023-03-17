import { Button, TextField } from "@mui/material";
import { NavLink } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useLoginStyles } from "./Login.styles";

function Login() {
  const styles = useLoginStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLoginClick = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {})
      .catch((error) => {
        console.log(error.name);
      });
  };

  return (
    <div className={styles.parent}>
      <div className={styles.left}>
        <div>
          <h1 className={styles.h1}>Website Name</h1>
          <h3 className={styles.h3}>Description</h3>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.formDiv}>
          <div className={styles.form}>
            <span>
              <TextField
                label="Email"
                variant="outlined"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </span>
            <span>
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </span>
            <span>
              <Button variant="contained" onClick={onLoginClick}>
                <NavLink to="/profile" style={{ textDecoration: "none" }}>
                  Sign In
                </NavLink>
              </Button>
            </span>
          </div>
          <Button variant="outlined">
            <NavLink to="/register" style={{ textDecoration: "none" }}>
              Register
            </NavLink>
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Login;

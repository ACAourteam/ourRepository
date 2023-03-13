import { createUseStyles } from "react-jss";
import { Button, TextField } from "@mui/material";
import { NavLink } from "react-router-dom";
import { getDocs } from "firebase/firestore";
import { usersRef } from "../firebase";
import { useState } from "react";

function Login() {
  const useStyles = createUseStyles({
    parent: {
      width: "100%",
      height: "100%",
      background: "#333333",
      textAlign: "center",
      display: "flex",
      justifyContent: "space-around",
    },
    left: {
      position: "relative",
      "& div": {
        position: "absolute",
        top: "30%",
      },
    },
    h1: {
      color: "#23A8F2",
    },
    h3: {
      color: "white",
    },

    right: {
      position: "relative",
    },
    formDiv: {
      width: "300px",
      height: "400px",
      position: "absolute",
      top: "20%",
      right: "0px",
      color: "black",
      background: "white",
      borderRadius: "12px",
    },
    form: {
      padding: "40px",
      display: "flex",
      flexDirection: "column",
      "& span": {
        padding: "10px",
      },
    },
  });

  const styles = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  const onLoginClick = () => {
    getDocs(usersRef)
      .then((snapshot) => {
        let allUsers = [];
        snapshot.docs.forEach((doc) => {
          allUsers.push({ ...doc.data(), id: doc.id });
        });
        setUsers(allUsers);
        console.log(allUsers);
      })
      .catch((err) => console.log(err.message));
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
          <form className={styles.form}>
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
                Log In
              </Button>
            </span>
          </form>
          <Button variant="outlined">
            <NavLink to="/register">Register</NavLink>
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Login;

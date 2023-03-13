import { Button, TextField } from "@mui/material";
import { addDoc, getDocs } from "firebase/firestore";
import { useState } from "react";
import { createUseStyles } from "react-jss";
import { usersRef } from "../firebase";

function Register() {
  const useStyles = createUseStyles({
    parent: {
      width: "100%",
      height: "100%",
      background: "#333333",
      textAlign: "center",
      position: "relative",
    },
    form: {
      width: "400px",
      height: "400px",
      position: "absolute",
      top: "20%",
      right: 0,
      left: 0,
      margin: "auto",
      padding: "30px",
      background: "white",
      display: "flex",
      flexDirection: "column",
      borderRadius: "12px",
      "& span": {
        padding: "10px",
      },
    },
  });
  const styles = useStyles();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onRegisterClick = () => {
    const user = {
      name,
      surname,
      email,
      password,
    };
    addDoc(usersRef, user);
    setName("");
    setSurname("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className={styles.parent}>
      <form className={styles.form}>
        <span>
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </span>
        <span>
          {" "}
          <TextField
            label="Surname"
            variant="outlined"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </span>
        <span>
          <TextField
            label="Email"
            variant="outlined"
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
          <Button variant="contained" onClick={onRegisterClick}>
            Register
          </Button>
        </span>
      </form>
    </div>
  );
}
export default Register;

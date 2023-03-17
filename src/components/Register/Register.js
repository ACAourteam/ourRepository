import { v4 as uuidv4 } from "uuid";
import { Button, TextField } from "@mui/material";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { storage, usersRef } from "../../firebase";
import { useRegisterStyles } from "./Register.styles";
import { NavLink } from "react-router-dom";

function Register() {
  const styles = useRegisterStyles();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);

  const onRegisterClick = () => {
    const user = {
      email,
      password,
      name,
      surname,
      avatarName: imageUpload.name,
    };

    addDoc(usersRef, user); //firestore

    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password) // authentiction
      .then((userCredential) => {
        setData(userCredential.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
    setName("");
    setSurname("");
    setEmail("");
    setPassword("");
  };

  const onAddAvatarChange = (e) => {
    setImageUpload(e.target.files[0]);
  };

  const downloadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `avatars/${imageUpload.name + uuidv4()}`);
    uploadBytes(imageRef, imageUpload);
  };
  return (
    <div className={styles.parent}>
      <div className={styles.form}>
        <span>
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </span>
        <span>
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
          <Button variant="contained" component="label" onClick={downloadImage}>
            Add Avatar
          </Button>
          <input
            // hidden
            accept="image/*"
            type="file"
            onChange={(e) => onAddAvatarChange(e)}
          />
        </span>
        <span>
          <Button variant="contained" onClick={onRegisterClick}>
            Sign Up
          </Button>
        </span>
        <NavLink to="/login">Sign In</NavLink>
      </div>
    </div>
  );
}
export default Register;

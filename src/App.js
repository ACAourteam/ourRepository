import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Profile from "./components/Profile/Profile";
import Register from "./components/Register/Register";
import { HOME, LOGIN, NOTFOUND, PROFILE, REGISTER } from "./constants/auth";
import { UserContext } from "./Context/Context";
import { usersRef } from "./firebase";
const useStyles = createUseStyles({
  app: {
    width: "100%",
    height: "100%",
  },
});
function App() {
  const styles = useStyles();
  const auth = getAuth();
  const [value, setValue] = useState("");

  useEffect(() => {
    const allUsers = [];
    getDocs(usersRef) // tvyalner stanalu hamar
      .then((snapshot) => {
        snapshot.forEach((doc) => allUsers.push({ ...doc.data(), id: doc.id }));
        onAuthStateChanged(auth, (user) => {
          /// cuyc e talis login exac mard ka te chka
          setValue(allUsers.find((elem) => elem.email == user?.email));
        });
      })
      .catch((err) => console.log(err.message));
  }, []);
  console.log(value);
  return (
    <UserContext.Provider value={value}>
      <div className={styles.app}>
        <Routes>
          <Route path={HOME} element={<Home />}></Route>
          <Route path={REGISTER} element={<Register />}></Route>
          <Route path={LOGIN} element={<Login />}></Route>
          {/* <Route path={PROFILE} element={<Profile />}></Route> */}

          <Route
            path={PROFILE}
            element={value ? <Profile /> : <Home />}
          ></Route>

          <Route path={NOTFOUND} element={<NotFound />}></Route>
        </Routes>
      </div>
    </UserContext.Provider>
  );
}
export default App;

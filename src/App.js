import { createUseStyles } from "react-jss";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Register from "./components/Register";
function App() {
  const useStyles = createUseStyles({
    app: {
      width: "100%",
      height: "100%",
    },
  });
  const styles = useStyles();
  return (
    <div className={styles.app}>
      {/* <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}
export default App;

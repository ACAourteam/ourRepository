import { Button } from "@mui/material";
import { createUseStyles } from "react-jss";

function Home() {
  const useStyles = createUseStyles({
    parent: {
      width: "100%",
      height: "100%",
      background: "#333333",
    },
    top: {
      display: "flex",
    },
    bottom: {
      width: "100%",
      height: "100px",
      display: "flex",
      justifyContent: "space-around",
    },
    left: { flexGrow: "1" },
    right: { flexGrow: "1" },
    types: {},
    logRegister: {},
    tasks: {},
  });
  const styles = useStyles();
  return (
    <div className={styles.parent}>
      <div className={styles.top}>
        <div className={styles.left}>
          <input type="search" />
          <div className={styles.types}>
            <div>type</div>
            <img />
            <div>type 1</div>
            <div>type 2</div>
            <div>type 3</div>
            <div>type 4</div>
          </div>
          <p>
            Welcome to our site! We're platform dedicated to helping you develop
            your ideas and grow your business. Whever you are looking to connect
            with talented individuals to fill specific roles, or seeking to
            improve your own skills and productivy, we're here to support you
            every step of the way. With our user-friendly tools and resources,
            you'll be able to effectively tackle any job with confidence and
            precision. Join our community today and unlock your full potential!
          </p>
        </div>
        <div className={styles.right}>
          <div className={styles.logRegister}>
            <Button>Log In</Button>
            <Button>Registration</Button>
          </div>
          <div className={styles.tasks}>
            <p>Tasks</p>
            {/* //////  changed */}
            <div>
              <img />
              <div>
                Title-UserName-Type
                <Button>Open</Button>
              </div>
            </div>
            <div>
              <img />
              <div>
                Title-UserName-Type
                <Button>Open</Button>
              </div>
            </div>
            <div>
              <img />
              <div>
                Title-UserName-Type
                <Button>Open</Button>
              </div>
            </div>
            <p>data</p>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div>
          <h3>
            <span>.</span> Contact Information
          </h3>
          <h3>
            <span>.</span> Terms of Use{" "}
          </h3>
        </div>
        <div>
          <h3>Example:@ 2023 [Step One]</h3>
        </div>
      </div>
    </div>
  );
}
export default Home;

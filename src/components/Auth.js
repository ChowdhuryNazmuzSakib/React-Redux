import { useDispatch } from "react-redux";
import classes from "./Auth.module.css";
import { authAction } from "../store";
const Auth = () => {
  const dispacth = useDispatch();
  const loginHandler = (e) => {
    e.preventDefault();
    dispacth(authAction.isLoggedIn());
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;

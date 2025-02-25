import css from "./LoginForm.module.css";
import Btn from "@react/components/buttons/Btn/Btn";
import Email from "@react/components/inputs/Email/Email";
import Password from "@react/components/inputs/Password/Password";
import { ROUTER } from "@router/router";

export default function LoginForm() {
  return (
    <form
      className={css.form}
      onSubmit={(e) => {
        e.preventDefault();
        console.log("oe");
      }}
    >
      <Email />
      <Password />
      <div>
        <span>¿No tiene una cuenta?</span>
        <a href={ROUTER.register.href}> Registrarse</a>
      </div>
      <Btn>Login</Btn>
    </form>
  );
}

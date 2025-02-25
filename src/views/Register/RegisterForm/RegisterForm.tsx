import css from "./RegisterForm.module.css";
import Btn from "@react/components/buttons/Btn/Btn";
import Email from "@react/components/inputs/Email/Email";
import Password from "@react/components/inputs/Password/Password";
import { ROUTER } from "@router/router";

export default function RegisterForm() {
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
        <span>¿Ya tiene una cuenta?</span>
        <a href={ROUTER.login.href}> Ir a Login</a>
      </div>
      <Btn>Registrarse</Btn>
    </form>
  );
}

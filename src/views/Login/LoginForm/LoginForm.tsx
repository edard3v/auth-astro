import css from "./LoginForm.module.css";
import Btn from "@react/components/buttons/Btn/Btn";
import Email from "@react/components/inputs/Email/Email";
import Password from "@react/components/inputs/Password/Password";
import { ROUTER } from "@router/router";

export default function LoginForm() {
  return (
    <form
      className={css.form}
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const email = formData.get("email");
        const password = formData.get("password");

        if (!email || !password) return;

        console.log(email, password);
      }}
    >
      <Email name="email" />
      <Password name="password" />
      <div>
        <span>¿No tiene una cuenta?</span>
        <a href={ROUTER.register.href}> Registrarse</a>
      </div>
      <Btn>Login</Btn>
    </form>
  );
}

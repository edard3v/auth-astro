import type { InputHTMLAttributes } from "react";
import css from "./Email.module.css";
import { cls } from "@react/utils/cls";

export default function Email(props: Props) {
  const { className, err, ...rest } = props;
  return (
    <label className={cls([css.email, className])}>
      <input
        {...rest}
        type="email"
        placeholder="example@email.com"
        className={cls([err && css.inputErr])}
        title={err}
      />
    </label>
  );
}

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  err?: string;
}

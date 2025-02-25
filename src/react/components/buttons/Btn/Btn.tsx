import css from "./Btn.module.css";
import Cross from "@react/icons/Cross";
import type { ButtonHTMLAttributes } from "react";
import { cls } from "@react/utils/cls";

export default function Btn(props: Props) {
  const { className, children, loading, err, disabled, ...rest } = props;

  return (
    <button {...rest} className={cls([css.btn, className])} disabled={disabled || loading}>
      {!loading && children}

      {loading && <div className={css.loading}></div>}

      {err && !loading && !disabled && <Cross className={css.err} />}
    </button>
  );
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  err?: boolean;
}

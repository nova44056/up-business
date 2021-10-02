import React from "react";

import css from "../styles/Button.module.css";
import ctx from "classnames";

interface Props {}

export const SecondaryButton: React.FC<Props> = ({ children }) => {
  return <button className={ctx(css.btn, css.secondary)}>{children}</button>;
};

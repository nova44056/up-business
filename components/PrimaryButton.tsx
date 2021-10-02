import React from "react";
import css from "../styles/Button.module.css";
import ctx from "classnames";

interface Props {}

export const PrimaryButton: React.FC<Props> = ({ children }) => {
  return <button className={ctx(css.btn, css.primary)}>{children}</button>;
};

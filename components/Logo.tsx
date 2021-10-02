import React from "react";
import css from "../styles/Logo.module.css";
import { BsArrowUp } from "react-icons/bs";

interface Props {}

export const Logo: React.FC<Props> = () => {
  return (
    <div className={css.container}>
      <BsArrowUp />
      <span>up business</span>
    </div>
  );
};

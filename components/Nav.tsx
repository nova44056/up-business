import React from "react";
import { Logo } from "./Logo";

import css from "../styles/Nav.module.css";
import ctx from "classnames";

import { FaBars } from "react-icons/fa";
import { PrimaryButton } from "./PrimaryButton";

interface Props {}

export const Nav: React.FC<Props> = () => {
  const [expand, setExpand] = React.useState(false);
  return (
    <header
      style={{
        marginBottom: expand ? 194.38 : 0,
      }}
      className={ctx("container", css.container)}
    >
      <Logo />
      <FaBars onClick={() => setExpand(!expand)} className={css.hamburger} />
      <nav className={ctx(css.nav, expand ? css.expand : null)}>
        <ul>
          <li>Home</li>
          <li>How we work</li>
          <li>Our team</li>
          <li>Pricing</li>
          <li>
            <PrimaryButton>Book a call</PrimaryButton>
          </li>
        </ul>
      </nav>
    </header>
  );
};

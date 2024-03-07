import { useState } from "react";

import classes from "./App.module.css";
import { Link, Outlet } from "react-router-dom";
import iconUrl from "@/assets/phone_icon.png";
import Icon from "@/assets/phone_icon.svg";

const todo = (a: number) => {
  console.log(a);
};

export const App = () => {
  const [counter, setCounter] = useState(0);
  // console.log(classes);

  todo(2);

  return (
    <>
      <div>Platform = assaas {__PLATFORM__}</div>
      <Link to={"/about"}>About</Link>
      <br />
      <Link to={"/shop"}>Shop</Link>
      <div>
        <p className={classes.text}>{counter}</p>
        <button onClick={() => setCounter((prev) => --prev)}>dec</button>
        <button onClick={() => setCounter((prev) => ++prev)}>inc</button>
      </div>
      <Outlet />
    </>
  );
};

import Profile from "../src/assets/profile.png";
import Plus from "../src/assets/plus.svg";
import Lista from "../src/assets/lista.png";
import { useState } from "react";
function Header({ setAtivarForm, setAtivarLista }) {
  return (
    <>
      <header className="h-[75px] fixed bottom-0 w-full bg-amber-700 content-center ">
        <nav className="w-5/6 mx-auto flex justify-center bg-center ">
          <ul className="flex w-full justify-around items-center">
            <li>
              <img
                className="transition-transform duration-300 hover:scale-150"
                src={Plus}
                alt=""
                onClick={setAtivarForm}
              />
            </li>
            <li>
              <img
                className="transition-transform duration-300 hover:scale-150"
                src={Lista}
                alt=""
                onClick={setAtivarLista}
              />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default Header;

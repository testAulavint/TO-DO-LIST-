import BtnBase from "./btn";
import Google from "../src/assets/google.svg";
import Facebook from "../src/assets/facebook.svg";
import Apple from "../src/assets/apple.svg";
import Microsoft from "../src/assets/microsoft.svg";
import Paisagem from "../src/assets/paisagem.jpg";
import { useState } from "react";

function Login({
  hendleSubmit,
  emailDigitado,
  setEmailDigitado,
  Valido,
  inverter,
}) {
  return (
    <div className=" loginText h-full flex flex-col justify-center items-center  ">
      <div className="LoginPrincipal h-3/4 w-1/2 max-w-[500px] rounded-2xl grid grid-rows-[auto_auto_1fr_auto] gap-4 p-9 ">
        <div className="">
          <h2 className="text-center  grid h-fit">Crie suas Tarefas</h2>
        </div>

        <div>
          <p className="text-center">
            Cadastre-se usando sua conta de mídia social
          </p>
        </div>

        <div className="grid min-h-0 grid-rows-[auto_auto_1fr] gap-10 mt-10">
          <div className=" flex items-start justify-around">
            <div className="divImag ">
              {" "}
              <img className="" src={Google} alt="" />
            </div>
            <div className="divImag">
              {" "}
              <img src={Apple} alt="" />
            </div>
            <div className="divImag">
              {" "}
              <img src={Microsoft} alt="" />
            </div>
            <div className="divImag">
              {" "}
              <img src={Facebook} alt="" />
            </div>
          </div>
          <div>
            <p className="text-center"> ou </p>
          </div>
          <div className="ResizeText flex flex-col">
            <input
              className="border rounded-2xl p-3 pl-3 "
              placeholder="Inserir E-mail"
              type="text"
              value={emailDigitado}
              onChange={(event) => setEmailDigitado(event.target.value)}
            />
            <div className="text-gray-600 flex flex-col gap-2 mt-5">
              <div>
                <input
                  className="mr-1"
                  type="checkbox"
                  id="item4"
                  checked={Valido}
                  onChange={(e) => inverter(e.target.value)}
                />{" "}
                <label htmlFor="item4" className="">
                  Concordo em receber atualizações
                </label>
              </div>

              <div>
                {" "}
                <input type="checkbox" id="it2" className="mr-2 " />
                <label htmlFor="it2">
                  Quero receber materiais de treinamento
                </label>
              </div>
            </div>
          </div>
        </div>

        <div>
          <button
            onClick={hendleSubmit}
            type="submit"
            className="bg-green-300 w-full h-10 rounded-2xl cursor-pointer"
          >
            Crie Grátis
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;

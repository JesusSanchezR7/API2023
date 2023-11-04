import { Request, Response } from "express";
import { registerNewUser, loginUser } from "../services/auth";

// SE CREEA UNA COSTANTE PARA SE AGA EL REGISTRO 
const registerCtrl = async ({ body }: Request, res: Response) => {
  const responseUser = await registerNewUser(body);  //NEW USER
  res.send(responseUser);
};

const loginCtrl = async ({ body }: Request, res: Response) => {
  const { email, password } = body;
  const responseUser = await loginUser({ email, password });

  if (responseUser === "CONTRASEÑA_INCORRECTA") {
    res.status(403);
    res.send(responseUser);
  } else {
    res.send(responseUser);
  }
};

export { loginCtrl, registerCtrl };
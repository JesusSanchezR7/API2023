import { Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { RequestExt } from "../interfaces/req-ext";
import { handleHttp } from "../utils/error.handle";

const getItems = (req: RequestExt, res: Response) => {
  try {
    res.send({
      data: "BIENVENIDO -~- DE NUEVO",
      user: req.user,
    });
  } catch (e) {
    handleHttp(res, "ERROR_GET");
  }
};

export { getItems };
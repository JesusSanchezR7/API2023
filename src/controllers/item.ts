import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import {insertCar, getCars, getCar, updateCar, deleteCar,} from "../services/item";
import { handleHttp } from "../utils/error.handle";

const getItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getCar(id);
    const data = response ? response : "NO SE ENCONTRO DATOS";
    res.send(data);
  } catch (e) {
    handleHttp(res, "error al tomar un solo get");
  }
};

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getCars();
    res.send(response);
  } catch (e) {
    handleHttp(res, "error al tomar todos los get");
  }
};

const updateItem = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateCar(id, body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "error al querer actualizar");
  }
};

const postItem = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertCar(body);
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "error al querer insertar", e);
  }
};

const deleteItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteCar(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "error al querer eliminar", e);
  }
};

export { getItem, getItems, postItem, updateItem, deleteItem };
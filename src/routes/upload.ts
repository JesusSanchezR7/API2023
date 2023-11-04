import { Router } from "express";
import { getFile } from "../controllers/upload";
import multerMiddleware from "../middleware/file";
import { checkJwt } from "../middleware/session";

const router = Router();
//creear un archivo para archivos y con ello obtener archivo 
router.post("/", checkJwt, multerMiddleware.single("myfile"), getFile);

export { router };
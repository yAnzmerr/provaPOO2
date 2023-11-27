import { Router } from "express";
import LanceController from "../controladores/controladorLance"

const rotaLances = Router();

rotaLances.get("/", LanceController.listarLance);

rotaLances.post("/create", LanceController.criarLance);

rotaLances.patch("/update/:lanceId", LanceController.atualizarLance);

rotaLances.delete("/delete/:lanceId", LanceController.deletarLance);

export default rotaLances;
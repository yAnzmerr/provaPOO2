import { Request, Response } from "express"
import LanceServices from "../servicos/servicosLances"
import {Prisma} from "@prisma/client"

class controladorLance{
    constructor(){}

    async listarLance(req: Request, res: Response){
        try {
            const lances = await LanceServices.listarLances();

            return res.json(lances);
        } catch(error){
            console.log(error);
            return res.json(400);
        }
    }

    async criarLance(req: Request, res: Response){
        try {
        const data: Prisma.LanceCreateInput = req.body;

        const newLance = await LanceServices.criarLance(data)

        return res.json(newLance);
    }   catch(error){
        console.log(error);
        return res.json(400);
        }   
    }

    async deletarLance(req: Request, res: Response){
        try {
            const lanceData: string = req.params.lanceId;

            const lance = await LanceServices.deletarLance(lanceData);

            res.json(lance)
        }   catch(error){
            console.log(error);
            return null;
        }
    }

    async atualizarLance(req: Request, res: Response){
        try {
            const lanceId = req.params.lanceId;
            const data: Prisma.LanceCreateInput = req.body;

            const lance = await LanceServices.atualizarLance(lanceId, data);

            return res.json(lance);
        }   catch(error){
            console.log(error);
            return res.json(400);
        }
    }

    
}

export default new controladorLance();
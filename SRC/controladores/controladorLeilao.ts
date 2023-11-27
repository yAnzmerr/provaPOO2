import { Request, Response } from "express"
import LeilaoServices from "../servicos/servicosLeilao"
import {Prisma} from "@prisma/client"

class controladorLeilao{
    constructor(){}

    async listarLeiloes(req: Request, res: Response){
        try {
            const leiloes = await LeilaoServices.listarLeiloes();

            return res.json(leiloes);
        } catch(error){
            console.log(error);
            return res.json(400);
        }
    }

    async criarLeilao(req: Request, res: Response){
        try {
        const data: Prisma.LeilaoCreateInput = req.body;

        const newLeilao = await LeilaoServices.criarLeilao(data)

        return res.json(newLeilao);
    }   catch(error){
        console.log(error);
        return res.json(400);
    }   
    }

    async deletarLeilao(req: Request, res: Response){
        try {
            const leilaoData: string = req.params.leilaoId;

            const leilao = await LeilaoServices.deletarLeilao(leilaoData);

            res.json(leilao)
        }   catch(error){
            console.log(error);
            return null;
        }
    }

    async atualizarLeilao(req: Request, res: Response){
        try {
            const leilaoId = req.params.leilaoId;
            const data: Prisma.LeilaoCreateInput = req.body;

            const leilao = await LeilaoServices.atualizarLeilao(leilaoId, data);

            return res.json(leilao);
        }   catch(error){
            console.log(error);
            return res.json(400);
        }
    }

    
}

export default new controladorLeilao();
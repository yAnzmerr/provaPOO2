import { Request, Response } from "express"
import UserServices from "../servicos/servicosUsuario"
import {Prisma} from "@prisma/client"

class controladorUsuario{
    constructor(){}

    async listarUsers(req: Request, res: Response){
        try {
            const users = await UserServices.listarUsuarios();

            return res.json(users);
        } catch(error){
            console.log(error);
            return res.json(400);
        }
    }

    async criarUser(req: Request, res: Response){
        try {
        const data: Prisma.UsuarioCreateInput = req.body;

        const newUser = await UserServices.criarUsuario(data)

        return res.json(newUser);
    }   catch(error){
        console.log(error);
        return res.json(400);
    }   
    }

    async deletarUser(req: Request, res: Response){
        try {
            const userData: string = req.params.usuarioId;

            const user = await UserServices.deletarUsuario(userData);

            return res.json(user)
        }   catch(error){
            console.log(error);
            return null;
        }
    }

    async atualizarUser(req: Request, res: Response){
        try {
            const userId = req.params.usuarioId;
            const data: Prisma.UsuarioCreateInput = req.body;

            const user = await UserServices.atualizarUsuario(userId, data);

            return res.json(user);
        }   catch(error){
            console.log(error);
            return res.json(400);
        }
    }

    
}

export default new controladorUsuario();
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

class servicosUsuario {
    constructor() { }

    async criarUsuario(usuario: Prisma.UsuarioCreateInput) {
        try {
            const newusuario = await prisma.usuario.create({
                data: usuario
            });
            return newusuario;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async listarUsuarios(usuarioId?: string): Promise<Prisma.UsuarioCreateInput[] | Prisma.UsuarioCreateInput | undefined | null> {
        try {
            if (usuarioId) {
                const usuario = await prisma.usuario.findUnique({
                    where: {
                        usuarioId
                    }
                })
                return usuario;
            }
            else {
                const usuarios = await prisma.usuario.findMany();
                return usuarios;
            }
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async atualizarUsuario(usuarioId: string, newData: Prisma.UsuarioUpdateInput){
        try{
            const usuarioUpdated = await prisma.usuario.update({
                where : {
                    usuarioId
                },
                data: {
                    nome: newData.nome,
                    email: newData.email,
                    lances: newData.lances,
                    leiloes: newData.leiloes,
                }
            });
            return usuarioUpdated;
        }   catch(error){
            console.log(error);
            return null;
        }
    }

    async deletarUsuario(usuarioId: string){
        try{
            if(!usuarioId){
                return console.log("ID is not optional.");
            }
            await prisma.usuario.delete({where: {usuarioId}});
            return "ok";
        } catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new servicosUsuario();
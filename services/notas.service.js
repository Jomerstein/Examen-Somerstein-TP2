import notasModel from "../models/notas.model.js"

const getNotas = async () =>{
    const notas = await notasModel.getNotas()
    return notas
}

const getNotasById = async (id) => {
    try {
        const notasById = await notasModel.getNotasById(id);
        return notasById;
    } catch (error) {
        throw new Error(error.message);
    }
}


const postNotas = async(nota) =>{
    try{
        const postearNota  = await notasModel.postNotas(nota)
    return postearNota
    }catch(error){
        throw new Error(error.message)
    }
    
}

export default{
    getNotas,
    postNotas,
    getNotasById
}
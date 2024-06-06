import notasService from "../services/notas.service.js"

const getNotas = async(req,res) =>{
    const notas = await notasService.getNotas()
    res.send(notas)
}

const postNotas = async(req,res) =>{
    try{
        const nota = req.body
        const postearNota = await notasService.postNotas(nota)
        res.send(postearNota)
    }catch(error){
        res.status(500).json({error: error.message})
    }
 
}

const getNotasById = async(req,res) =>{
    try{
        const id = req.params.id
        const notaPorId  = await notasService.getNotasById(id)
        res.send(notaPorId)
    }catch(error){
        res.status(500).json({error: error.message})
    }
 
}


export default {
  getNotas,
  postNotas,
  getNotasById
}
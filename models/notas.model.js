import { log } from 'console';
import fs from 'fs'
import Joi from 'joi'
const notasJson = "./notas.json"

const esquema = Joi.object({
    nombre: Joi.string().required(),
    calificacion: Joi.number().min(0).max(10).required(),
    id: Joi.number().required()
}
)

const fetchDatos = async() =>{
    const data = JSON.parse(await fs.promises.readFile(notasJson, "utf-8",(error, dt)=>{
        if(error){
            log(error, "Error haciendo el fetch")
        }
    }
    ))
    
    
    return data
}

const getNotas = async() =>{
    const data = await fetchDatos()
    return data
    
}

const getNotasById = async(id) =>{
    const data =await fetchDatos()
    console.log(id);
    const alumno = data.find(alumnoBuscado => alumnoBuscado.id == id)
    console.log("encontrado + ", alumno);
    if(typeof(alumno) === "undefined"){
        throw new Error("Alumno no encontrado") 
    }
    const mensajeRespuesta = crearMensajeRespuesta(alumno)
    return mensajeRespuesta
}

const crearMensajeRespuesta = (alumno) =>{
  return `El nombre del alumno es ${alumno.nombre} y su calificación es ${alumno.calificacion}`
}


const postNotas = async(nota) =>{
    const data = await fetchDatos()
    nota.id = data.length + 1;
    const validar = esquema.validate(nota)
    if(validar.error){
        throw new Error("Formato del alumno no válido, el formato debe ser:  nombre: XXXX (string) calificacion: XXXX (número del 1 al 10)")
    }
    data.push(nota)
    const pushearData  = JSON.stringify(data)
    await fs.promises.writeFile(notasJson, pushearData)
}



export default {
    getNotas,
    postNotas,
    getNotasById
}
import express from 'express'
import notasController from '../controllers/notas.controller.js'
const router = express.Router()

router.get("/notas", notasController.getNotas)
router.get("/notas/:id", notasController.getNotasById)
router.post("/notas", notasController.postNotas)

export default router
import { Router } from "express";
const router = Router();


import * as estudiantesCtrl from "../controllers/estudiantes.controller";


router.delete('/deleteDesarrollo/:idDesarrollo', estudiantesCtrl.deleteActividadUpload);
router.get('/:idUser&:idMatter', estudiantesCtrl.getActivityByIdUser)
router.get('/', estudiantesCtrl.getActivitys)
// router.post('/:idUser&:idGrade&:idMatter', estudiantesCtrl.uploadActivity)
router.post('/:idUser&:idActividad&:Jornada', estudiantesCtrl.uploadActivity)
router.get('/matters/:jornada&:idGrade', estudiantesCtrl.getMatters);
router.get('/getActividades/:idGrade&:idMatter', estudiantesCtrl.getActivityMatters);


export default router;
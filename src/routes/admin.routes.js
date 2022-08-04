import { Router } from "express";
const router = Router()
import { authJwt, verifySignup } from '../middlewares'
import * as adminCtrl from "../controllers/admin.controller";
import {validate} from "../validations/singup.validations"



//CREAR DISTRIBUIRDOR
router.get('/getBrand', adminCtrl.getDistributor)
router.get('/getBrandByid/:distributorid', adminCtrl.getByIdDistributor)
router.post('/createBrand', adminCtrl.createDistributor)
router.put('/updateBrandId/:distributorid', adminCtrl.updateBrandById)
router.delete('/deleteBrandById/:distributorid', adminCtrl.deleteBrandById)








// // 1#  crear las materias
// // 2#  crear las materias


// // traer usuarios dependiendo el rol
// router.get('/getdocentes/:jornada', adminCtrl.getDocente);
// router.get('/listar/:rol', adminCtrl.getAllTipoRol);

// // CRUD GRADE
// router.post('/createGrade', adminCtrl.createGrade)
// router.delete('/deleteGradeId/:GradeId', adminCtrl.deleteGradeId)
// router.put('/updateGradeId/:GradeId', adminCtrl.updateGradeId)
// router.get('/getGradeId/:GradeId', adminCtrl.getGradeId)
// router.get('/getGrade/', adminCtrl.getGrade)
// router.get('/getGradeWorkingDay/:jornada', adminCtrl.getGradeWorkingDay)

// // CRUD MATTERS
// router.post('/createMatter', adminCtrl.createMatter)
// router.delete('/deleteMatterId/:matterId', adminCtrl.deleteMatterId)
// router.put('/updateMatterId/:matterId', adminCtrl.updateMatterId)
// router.get('/getMatterId/:matterId', adminCtrl.getMatterId)
// router.get('/getMatter/', adminCtrl.getMatter)

// // CRUD USERS
// router.post('/', adminCtrl.createUser);
// router.get('/', adminCtrl.getUsers);
// router.put('/:userId', adminCtrl.updateUserById);
// router.get('/:userId', adminCtrl.getUserById);
// router.delete('/:userId', adminCtrl.deleteUserById);

// router.get('/getTeachers/:jornada', adminCtrl.getTeachersWorkingDay);




export default router;
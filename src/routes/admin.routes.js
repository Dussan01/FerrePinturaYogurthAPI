import { Router } from "express";
const router = Router()
import { authJwt, verifySignup } from '../middlewares'
import * as adminCtrl from "../controllers/admin.controller";
import {validate} from "../validations/singup.validations"



//CRUD DISTRIBUIRDOR
router.get('/getDistributor', adminCtrl.getDistributor)
router.get('/getDistributorByid/:distributorid', adminCtrl.getByIdDistributor)
router.post('/createDistributor', adminCtrl.createDistributor)
router.put('/updateDistributorId/:distributorid', adminCtrl.updateDistributorById)
router.delete('/deleteDistributorById/:distributorid', adminCtrl.deleteDistributorById)
 
//CRUD CALIDAD 
router.get('/getQuality', adminCtrl.getQuality)
router.get('/getQualityByid/:idcalidad', adminCtrl.getQualityById)
router.post('/createQuality', adminCtrl.createQuality)
router.put('/updateQualityId/:idcalidad', adminCtrl.updateQuality)
router.delete('/deleteQualityById/:idcalidad', adminCtrl.deleteQuality)


//CRUD Category 
router.get('/getCategory', adminCtrl.getCategory)
router.get('/getCategoryByid/:idCategory', adminCtrl.getCategoryById)
router.post('/createCategory', adminCtrl.createCategory)
router.put('/updateCategoryId/:idCategory', adminCtrl.updateCategory)
router.delete('/deleteCategoryById/:idCategory', adminCtrl.deleteCategory)

//CRUD Unit
router.get('/getUnit', adminCtrl.getUnit)
router.get('/getUnitByid/:idUnit', adminCtrl.getUnitById)
router.post('/createUnit', adminCtrl.createUnit)
router.put('/updateUnitId/:idUnit', adminCtrl.updateUnit)
router.delete('/deleteUnitById/:idUnit', adminCtrl.deleteUnit)

//CRUD Product    
router.get('/getProduct', adminCtrl.getProduct)
router.get('/getProductByid/:idProduct', adminCtrl.getProductById)
router.post('/createProduct', adminCtrl.createProduct)
// router.put('/updateProductId/:idProduct', adminCtrl.updateProduct)
// router.delete('/deleteProductById/:idProduct', adminCtrl.)













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
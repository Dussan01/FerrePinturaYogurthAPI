import User from "../models/User";
import Role from '../models/Role';
import {mongo} from 'mongoose';
import Distribuidor from "../models/Distribuidor";
import Calidad from "../models/Calidad";
import Categoria from "../models/Categoria";
import Unidad from "../models/Unidad";



//CRUD DISTRIBUTOR
export const getDistributor = async (req, res) => {
    const distributor = await Distribuidor.find()
    res.json({"data": distributor});
}

export const getByIdDistributor = async (req, res) => {
    const distributorid = await Distribuidor.findById(req.params.distributorid)
    res.json({"data": distributorid});
}

export const createDistributor = async (req, res) => {
    const {empresa, cuenta, responsable, banco, telefono, celular, celularopc, correo, nit} = req.body
    const newDistributor = new Distribuidor({empresa, cuenta, responsable, banco, telefono, celular, celularopc, correo, nit})
    const rest = await newDistributor.save()
    res.status(200).json({"message":"Guardado con exito", "data": rest})
}

export const updateBrandById = async (req, res) => {
    const {empresa, cuenta, responsable, banco, telefono, celular, celularopc, correo, nit} = req.body     
    const updateByIdDistributor = await Distribuidor.findByIdAndUpdate(req.params.distributorid,{empresa, cuenta, responsable, banco, telefono, celular, celularopc, correo, nit}, { new: true })   
    res.json({"message":"Actualizado con exito","data": updateByIdDistributor});
}

export const deleteBrandById = async (req,res) => {
    const deleteDistributor = await Distribuidor.findByIdAndDelete(req.params.distributorid)
    res.status(200).json({"message":"Eliminado correctamente"});
}
//CRUD Quality
export const getQuality = async (req, res) => {
    const getQuality = await Calidad.find()
    res.status(200).json({"data": getQuality})
}

export const getQualityById = async (req, res) => {
    const getQuality = await Calidad.findById(req.params.idcalidad)
    res.status(200).json({"data": getQuality})
}

export const createQuality = async (req, res) => {
    const {calidad} = req.body
    const newCalidad = new Calidad({calidad})
    const result = await newCalidad.save()
    res.status(200).json({"message": "Guardado con exito", "data": result})
}

export const updateQuality = async (req, res) => {
    const {calidad} = req.body
    const updateQuality = await Calidad.findByIdAndUpdate(req.params.idcalidad,{calidad}, { new: true })    
    res.status(200).json({"message":"Actualizado con exito"})
}
export const deleteQuality = async (req, res) => {    
    const deleteQuality = await Calidad.findByIdAndDelete(req.params.idcalidad)
    res.status(200).json({"message":"Eliminado con exito"})
}

//CRUD CATEGORY
export const getCategory = async (req, res) => {
    const getCategory = await Categoria.find()
    res.status(200).json({"data": getCategory})
}

export const getCategoryById = async (req, res) => {
    const getCategory = await Categoria.findById(req.params.idCategory)
    res.status(200).json({"data": getCategory})
}

export const createCategory = async (req, res) => {
    const {categoria} = req.body
    const newCategoria = new Categoria({categoria})
    const result = await newCategoria.save()
    res.status(200).json({"message": "Guardado con exito", "data": result})
}

export const updateCategory = async (req, res) => {
    const {categoria} = req.body
    const updateCategory = await Categoria.findByIdAndUpdate(req.params.idCategory,{categoria}, { new: true })    
    res.status(200).json({"message":"Actualizado con exito"})
}
export const deleteCategory = async (req, res) => {    
    const deleteCategory = await Categoria.findByIdAndDelete(req.params.idCategory)
    res.status(200).json({"message":"Eliminado con exito"})
}


//CRUD Unit
export const getUnit = async (req, res) => {
    const getUnit = await Unidad.find()
    res.status(200).json({"data": getUnit})
}

export const getUnitById = async (req, res) => {
    const getUnit = await Unidad.findById(req.params.idUnit)
    res.status(200).json({"data": getUnit})
}

export const createUnit = async (req, res) => {
    const {unidad, descripcion} = req.body
    const newUnidad = new Unidad({unidad, descripcion})
    const result = await newUnidad.save()
    res.status(200).json({"message": "Guardado con exito", "data": result})
}

export const updateUnit = async (req, res) => {
    const {unidad, descripcion} = req.body
    const updateUnit = await Unidad.findByIdAndUpdate(req.params.idUnit,{unidad, descripcion}, { new: true })    
    res.status(200).json({"message":"Actualizado con exito"})
}
export const deleteUnit = async (req, res) => {    
    const deleteUnit = await Unidad.findByIdAndDelete(req.params.idUnit)
    res.status(200).json({"message":"Eliminado con exito"})
}





// // CRUD PARA USUARIOS

// export const createUser = async (req, res) => {
//     try {
//         const { identificacion, email, nombres, apellidos, telefono, rh, fechaNacimiento, direccion, password, roles, grado, jornada } = req.body;
//         const newUser = new User({ identificacion, email, nombres, apellidos, telefono, rh, fechaNacimiento, direccion, password: await User.encryptPassword(password), roles, grado, jornada });
//         if (roles) {
//             const foundRoles = await Role.find({ name: { $in: roles } })
//             newUser.roles = foundRoles.map(role => role._id)
//         } else {
//             const role = await Role.findOne({ name: "estudiante" })
//             newUser.roles = [role._id]
//         }
//         const userSaved = await newUser.save()
//         res.status(201).json(userSaved);
//     } catch (error) {
//         res.status(400).json(error)
//     }
// }

// export const getUsers = async (req, res) => {
//     try {
//         const infoUsuario = await User.find().populate("roles");
//         res.status(200).json(infoUsuario)
//     } catch (error) {
//         res.status(400).json(error)
//     }

// }

// export const getUserById = async (req, res) => {
//     try {
//         const user = await User.findById(req.params.userId).populate(["roles", "grado"]);
//         console.log(user)
//         res.status(200).json(user);
//     } catch (error) {
//         res.status(400).json(error)
//     }

// }

// export const updateUserById = async (req, res) => {
//     const {
//         identificacion,
//         email,
//         nombres,
//         apellidos,
//         telefono,
//         rh,
//         fechaNacimiento,
//         direccion,
//         roles,
//         grado,
//         jornada
//     } = req.body;
//     console.log(req.params.userId)
//     console.log(req.body)

//     if (roles) {
//         console.log(roles)
//         const foundRoles = await Role.find({ name: { $in: roles } })
//         console.log(foundRoles)
//         const r = foundRoles.map(role => role._id)
//         console.log(r)
//         const updateUser = await User.findByIdAndUpdate(req.params.userId, {
//             identificacion,
//             email,
//             nombres,
//             apellidos,
//             telefono,
//             rh,
//             fechaNacimiento,
//             direccion,
//             roles: r,
//             grado, jornada
//         }, { new: true, useFindAndModify: false }).catch((e) => { console.log(e) })

//         res.status(200).json(updateUser);
//     } else {
//         const role = await Role.findOne({ name: 'estudiante' })
//         const r = [role._id]
//         const updateUser = await User.findByIdAndUpdate(req.params.userId, {
//             identificacion,
//             email,
//             nombres,
//             apellidos,
//             telefono,
//             rh,
//             fechaNacimiento,
//             direccion,
//             roles: r,
//             grado, jornada
//         }, { new: true, useFindAndModify: false })
//         res.status(200).json(updateUser);
//     }
// }
// export const deleteUserById = async (req, res) => {
//     try {
//         const { userId } = req.params
//         await User.findByIdAndDelete(userId)
//         res.status(204).json()

//     } catch (error) {
//         res.status(400).json(error)
//     }

// }



// // CRUD Materias
// export const createMatter = async (req, res, next) => {
//     const { nombre_materia, profesor, grados, jornada } = req.body
//     const newMatter = await Materia({ nombre_materia, jornada })
//     const foundDocente = await User.find({ _id: { $in: profesor } }).catch((e) => { res.status(400).json({ message: "No existe docente" }) })
//     const foundgrade = await Grado.find({ numero_grado: { $in: grados }, jornada: jornada }).catch((e) => { res.status(400).json({ message: "No existe docente" }) })
//     newMatter.user = foundDocente.map(item => item._id)
//     newMatter.grado = foundgrade.map(item => item._id)
//     const result = await newMatter.save()
//     res.json(result)
// }



// export const getMatter = async (req, res) => {
//     try {
//         const getMatter = await Materia.find().populate(["user", "grado"]);
//         res.status(200).json(getMatter);
//     } catch (error) {
//         res.status(400).json(error)
//     }
// }

// export const getMatterId = async (req, res) => {
//     try {
//         const metter = await Materia.findById(req.params.matterId);
//         console.log(metter)
//         res.status(200).json(metter);
//     } catch (error) {
//         res.status(400).json(error)
//     }

// }

// export const updateMatterId = async (req, res) => {
//     try {
//         const metter = await Materia.findByIdAndUpdate(req.params.matterId, req.body, { new: true });
//         res.status(200).json(metter)
//     } catch (error) {
//         res.status(400).json(error)
//     }

// }

// export const deleteMatterId = async (req, res) => {
//     try {
//         await Materia.findByIdAndDelete(req.params.matterId);
//         res.status(200).json("Eliminado")
//     } catch (error) {
//         res.status(400).json(error)
//     }

// }



// // CRUD crear grado

// export const createGrade = async (req, res) => {
//     try {
//         var dato;
//         var jorn;
//         const { numero_grado, jornada } = req.body;
//         const foundGrade = await Grado.find({ numero_grado: { $in: numero_grado } })
//         foundGrade.map((value) => {
//         dato = value.numero_grado
//         jorn = value.jornada})
//         if (dato == numero_grado && jorn == jornada) return res.status(400).json({message: "Grado y jornada ya existe"});
//         const newGrado = new Grado({ numero_grado, jornada })
//         console.log(newGrado)
//         const result = await newGrado.save();
//         res.status(200).json(result)
//     } catch (error) {
//         res.status(400).json(error)
//     }

// }


// export const getGrade = async (req, res) => {
//     try {
//         const foundGrade = await Grado.find()
//         res.status(200).json(foundGrade)
//     } catch (error) {
//         res.status(400).json(error)
//     }


// }


// export const getGradeWorkingDay = async (req, res) => {
//     try {
//         const foundGrade = await Grado.find({jornada: req.params.jornada});
//         res.status(200).json(foundGrade);    
//     } catch (error) {
//         res.status(400).json({mesage: "Error"})
//     }
    
// }


// export const deleteGradeId = async (req, res) => {
//     try {
//         const foundDeleteGrade = await Grado.findByIdAndDelete(req.params.GradeId)
//         res.status(400).json("Eliminado")
//     } catch (error) {
//         res.status(400).json(error)
//     }

// }

// export const updateGradeId = async (req, res) => {
//     try {
//         const { numero_grado, jornada } = req.body;
//         const foundGrade = await Grado.findById(req.params.GradeId);
//         console.log(foundGrade)
        
//         // if (materia) {
//         //     const grado = new Grado({ numero_grado, materia });
//         //     const foundMateria = await Materia.find({ nombre_materia: { $in: materia } })
//         //     const metter = foundMateria.map(materia => materia._id)
//         //     console.log(metter, req.body)
//         //     const updateGrade = await Grado.findByIdAndUpdate(req.params.GradeId, {
//         //         numero_grado,
//         //         materia: metter
//         //     }, { new: true });
//         //     res.status(200).json(updateGrade);
//         // } else {
//         //     const grado = new Grado({ numero_grado, materia });
//         //     const materia = await Materia.findOne({ nombre_materia: 'Sociales' })
//         //     const matter = [materia._id]
//         //     const updateGrade = await Grado.findByIdAndUpdate(req.params.GradeId, {
//         //         numero_grado,
//         //         materia: matter
//         //     }, { new: true });
//         //     res.status(200).json(updateGrade);
//         // }
//     } catch (error) {
//         res.status(400).json(error)
//     }

// }


// export const getGradeId = async (req, res) => {
//     try {
//         const foundGradeId = await Grado.findById(req.params.GradeId);
//         res.status(200).json(foundGradeId);
//     } catch (error) {
//         res.status(400).json(error)
//     }
// }



// // Obtener solo los usuarios con el tipo de rol que se envia
// export const getAllTipoRol = async (req, res) => {
//     const docente = await Role.find({ 'name': req.params.rol })
//     const idRol = docente.map(value => value._id)
//     console.log(idRol)
//     const docentes = await User.find({ 'roles': idRol }).populate("roles");
//     res.json(docentes)
// }

// export const getDocente = async (req, res) => {
    
//     try {

//         const rol = await Role.find({ 'name': 'docente' })
//         const idRol = rol.map(value => value._id)
//         const docente = await User.find({'roles': idRol, 'jornada': req.params.jornada },{'_id':1,'nombres':1,'apellidos':1})
//         res.status(200).json({data: docente})
//     } catch (error) {
//         res.status(400).json({mesage:"Algo, paso"})
//     }

// }

// export const getTeachersWorkingDay = async (req, res) => {
//     const rol = await Role.find({ 'name': 'docente' })
//     const idRol = rol.map(value => value._id)
//     const docente = await User.find({'roles': idRol },{'_id':1,'nombres':1,'apellidos':1})
// }  
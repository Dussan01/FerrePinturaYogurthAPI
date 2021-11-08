import Role from "../models/Role";
import Grado from "../models/Grado";
import User from "../models/User";
import jwt from "jsonwebtoken";
import config from "../config";



export const signup = async(req, res) => {

    try {
        const { identificacion, email, nombres, apellidos, telefono, rh, fechaNacimiento, direccion, password, roles, grado, jornada } = req.body;
        const newUser = new User({
            identificacion,
            email,
            nombres,
            apellidos,
            telefono,
            password: await User.encryptPassword(password).then((res) => console.log(res)).watch((error) => console.log(error)),
            jornada
        });
        if (roles) {
            const foundRoles = await Role.find({ name: { $in: roles } }).then((res) => console.log(res)).watch((error) => console.log(error))
            newUser.roles = foundRoles.map(role => role._id)
        } else {
            const role = await Role.findOne({ name: "estudiante" }).then((res) => console.log(res)).watch((error) => console.log(error))
            newUser.roles = [role._id]
        }
        if (grado) {
            const foundGrado = await Grado.find({ numero_grado: grado, jornada: jornada }).then((res) => console.log(res)).watch((error) => console.log(error))
            newUser.grado = foundGrado.map(role => role._id);
        }
        console.log(newUser)
        const savedUser = await newUser.save().then((res) => console.log(res)).watch((error) => console.log(error))
        console.log(savedUser);
        const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
            expiresIn: 86400,
        })
        res.status(200).json({ token })
        res.status(200).json('Registrado')
    } catch (error) {
        res.status(400).json(error)
    }


}
export const signin = async(req, res) => {
    try {
        const userFound = await User.findOne({ email: req.body.email }).populate("roles").then((res) => console.log(res)).watch((error) => console.log(error));
        const identificacionUser = await User.findOne({ identificacion: req.body.identificacion }).populate("roles").then((res) => console.log(res)).watch((error) => console.log(error));
        if (req.body.email) {
            if (!userFound) return res.status(400).json({ message: "Usuario no encontrado" });
            const macthPassword = await User.comparePassword(req.body.password, userFound.password).then((res) => console.log(res)).watch((error) => console.log(error));
            if (!macthPassword) return res.status(401).json({ token: null, message: "Contraseña invalida" });
            const token = jwt.sign({ id: userFound._id }, config.SECRET, {
                expiresIn: 86400
            })
            res.json({ token })
        } else if (req.body.identificacion) {
            if (!identificacionUser) return res.status(400).json({ message: "Usuario no encontrado" });
            const macthPassword = await User.comparePassword(req.body.password, identificacionUser.password);
            if (!macthPassword) return res.status(401).json({ token: null, message: "Contraseña invalida" });
            const token = jwt.sign({ id: identificacionUser._id }, config.SECRET, {
                expiresIn: 86400
            })
            res.json({ token })
        }
    } catch (error) {
        res.status(400).json(error)
    }

}
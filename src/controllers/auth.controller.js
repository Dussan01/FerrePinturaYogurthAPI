import Role from "../models/Role";
import Grado from "../models/Grado";
import User from "../models/User";
import jwt from "jsonwebtoken";
import config from "../config";



export const signup = async (req, res) => {
    
    // res.status(200).json('Registrado')
    try {
        const { identificacion, email, nombres, apellidos, telefono, rh, fechaNacimiento, direccion, password, roles } = req.body;
    const newUser = new User({
        identificacion,
        email,
        nombres,
        apellidos,
        telefono,
        password: await User.encryptPassword(password)
    });
    if (roles) {
        const foundRoles = await Role.find({ name: { $in: roles } })
        newUser.roles = foundRoles.map(role => role._id)
    } else {
        const role = await Role.findOne({ name: "cliente" })
        newUser.roles = [role._id]
    }

    console.log(newUser)
    const savedUser = await newUser.save()
    console.log(savedUser);
    const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
        expiresIn: 86400,
    })
    console.log(token)
    res.status(200).json({ token })
       

    } catch (error) {
        res.status(400).json({"message": 'Pailas'})
    }


}
export const signin = async (req, res) => {
    const userFound = await User.findOne({ email: req.body.email }).populate("roles")
        const identificacionUser = await User.findOne({ identificacion: req.body.identificacion }).populate("roles")
        if (req.body.email) {
            if (!userFound) return res.status(400).json({ message: "Usuario no encontrado" });
            const macthPassword = await User.comparePassword(req.body.password, userFound.password)
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
    try {
        
    } catch (error) {
        res.status(400).json(error)
    }

}
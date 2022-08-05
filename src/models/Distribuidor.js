import { Schema, model } from "mongoose";



const distribuidorSchema = new Schema({
    empresa:{
        type: String
    },
    cuenta: {
        type: String
    },
    responsable: {
        type: String
    },
    banco: {
        type: String
    },
    telefono:{
        type: Number
    },
    celular:{
        type: Number
    },
    celularopc:{
        type: Number
    },
    correo:{
        type: String
    },
    nit: {
        type: String
    },
    marca: {
        type: String
    }    
}, {
    timestamps: true,
    versionKey: false,
});




export default model('Distribuidor', distribuidorSchema);
import { Schema, model } from "mongoose";



const unidadSchema = new Schema({
    unidad:{
        type: String
    },
    descripcion: {
        type: String
    },    
}, {
    timestamps: true,
    versionKey: false,
});




export default model('Unidad', unidadSchema); 
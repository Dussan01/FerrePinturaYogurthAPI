import { Schema, model } from "mongoose";



const categoriaSchema = new Schema({
    categoria:{
        type: String
    }    
}, {
    timestamps: true,
    versionKey: false,
});




export default model('Categoria', categoriaSchema);
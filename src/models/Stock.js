import { Schema, model } from "mongoose";



const marcaSchema = new Schema({
    Marca: [{
        ref: "Marca",
        type: Schema.Types.ObjectId
    }],
    Categoria: [{
        ref: "Categoria",
        type: Schema.Types.ObjectId
    }],
    codigo_producto: {
        type: String
    },
    nombre: {
        type: String
    },
    descripcion:{
        type: String
    },
    cantidad:{
        type: Number
    },
    precio_unidad:{
        type: Number
    }
    
     
        
}, {
    timestamps: true,
    versionKey: false,
});




export default model('Marca', marcaSchema);
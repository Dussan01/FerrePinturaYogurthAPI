import { Schema, model } from "mongoose";



const stockSchema = new Schema({
    
   
    categoria: [{
        ref: "Categoria",
        type: Schema.Types.ObjectId
    }],
    unidad: [{
        ref: "Unidad",
        type: Schema.Types.ObjectId
    }],
    calidad: [{
        ref: "Calidad",
        type: Schema.Types.ObjectId
    }],
    marca: [{
        ref: "Marca",
        type: Schema.Types.ObjectId
    }],    
    distribuidor: [{
        ref: "Distribuidor",
        type: Schema.Types.marca
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




export default model('Stock', stockSchema);
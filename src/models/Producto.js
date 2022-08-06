import { Schema, model } from "mongoose";



const productSchema = new Schema({
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
    distribuidor: [{
        ref: "Distribuidor",
        type: Schema.Types.ObjectId
    }],    
    precio_lista: {
        type: Number
    },
    descuento_ingreso:{
        type: Number
    },
    porcentaje: {
        type: Number
    },
    valor_unitario:{
        type: Number
    },
    color:{
        type: String
    }    
}, {
    timestamps: true,
    versionKey: false,
});




export default model('Product', productSchema);
import { Schema, model } from "mongoose";



const calidadSchema = new Schema({
    calidad:{
        type: String
    }    
}, {
    timestamps: true,
    versionKey: false,
});




export default model('Calidad', calidadSchema);
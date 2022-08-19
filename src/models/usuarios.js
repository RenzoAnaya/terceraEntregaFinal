import mongoose from "mongoose";

const usuariosSchema = new mongoose.Schema({
    mail: String,
    password: String,
    nombre: String,
    address: String,
    edad: Number,
    phone: Number,
    photo: String

});


export default mongoose.model("usuarios", usuariosSchema);

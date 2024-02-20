const mongoose = require('mongoose');

// Define el esquema del usuario
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    // Otros campos que puedas necesitar
});

// Crea el modelo User basado en el esquema definido
const User = mongoose.model('User', userSchema);

module.exports = User;

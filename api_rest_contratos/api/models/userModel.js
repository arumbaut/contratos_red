var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

Schema = mongoose.Schema;

const roles = {
  values: ['ADMIN', 'USER'],
  message: '{VALUE} no es un rol válido'
}

var UserSchema = new Schema({
    name:   { type: String, required: [true, 'El nombre es necesario'] },
    email: { type: String, unique: true, required: [true, 'Email es necesario'] },
    pass: { type: String, required: [true, 'Pass es necesario'] },
    date: { type: Date, default: Date.now },
    role: { type: String, default: 'USER', enum: roles },
    activo: { type: Boolean, default: true }, 
    lastName : String,
    username: String,    
    movil : String,
    ci : String,
    department : String,
    cargo : String,
    numeroTecnico : Number,
    fechaEntrada : String,
    avatar : String    
});

UserSchema.plugin(uniqueValidator);

// Eliminar pass de respuesta JSON
UserSchema.methods.toJSON = function() {
  var obj = this.toObject();
  delete obj.pass;
  return obj;
 }

module.exports = mongoose.model('User', UserSchema);

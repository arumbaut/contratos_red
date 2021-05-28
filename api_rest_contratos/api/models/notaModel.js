var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var NotaSchema = new Schema({ 
    titulo: String,
    texto: String,
    fecha : String  
});

module.exports = mongoose.model('Nota', NotaSchema);

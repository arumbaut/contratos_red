var User = require('../models/userModel');

// Hash Contraseña
const bcrypt = require('bcrypt');
const saltRounds = 10;

//const fs = require('fs');

exports.list = function(req, res) {
	User.find(function(err, messages) {
		console.log(messages)
		res.json(messages);
        
	});
};

exports.create = function(req, res) {
	
	const body = req.body;
	body.pass = bcrypt.hashSync(req.body.pass, saltRounds);
		
	var user = new User(body);

	user.save(function(err, newMessage) {
			if (err) { 
				res.json(400, err.message);
			}
			else {
				res.json(newMessage);
			}
		});

	
}


exports.user =(req,res) =>{
	
	User.findById(req.params.id,(err,item)=>{
			if(err){
				res.json(err)
			}
			else{
				res.json(item)
			}	
	})
}

exports.edit = async (req,res, next)=>{
	
	let id = req.params.id;
	let body = req.body;
  
	try {
	  // {new:true} nos devuelve el usuario actualizado
	  //const usuarioDB = await User.findByIdAndUpdate(id, body, {new: true});
	  const usuarioDB = await User.findByIdAndUpdate(id, body, {new: true, runValidators: true});
  
	  return res.json(usuarioDB);
  
	} catch (error) {
	  return res.status(400).json({
		mensaje: 'Ocurrio un error',
		error
	  })
	}
}


exports.delete = async (req, res) => {

	let id = req.params.id;
  
	try {
  
	  const usuarioDelete = await User.findByIdAndRemove(id);
  
	  if(!usuarioDelete){
		return res.status(400).json({
		  mensaje: 'Usuario no encontrado'
		})
	  }
  
	  return res.json(usuarioDelete);
	  
	} catch (error) {
	  return res.status(400).json({
		mensaje: 'Ocurrio un error',
		error
	  })
	}
  
  };

var User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.list = async (req,res)=>{
    res.json({mensaje: 'Funcionaaaaaaaaaaaaaaaaaaaa!'})
}

exports.login = async (req,res)=>{
    let body = req.body;

  try {
    // Buscamos email en DB
    const usuarioDB = await User.findOne({email: body.email});

    // Evaluamos si existe el usuario en DB
    if(!usuarioDB){
      return res.status(400).json({
        mensaje: 'Usuario! o contraseña inválidos',
      });
    }

    // Evaluamos la contraseña correcta
    if( !bcrypt.compareSync(body.pass, usuarioDB.pass) ){
      return res.status(400).json({
        mensaje: 'Usuario o contraseña! inválidos',
      });
    }

    // Generar Token
    let token = jwt.sign({
    data: usuarioDB
  }, 'secret', { expiresIn: 60 * 60 * 24 * 30}) // Expira en 30 días

    // Pasó las validaciones
    return res.json({
      usuarioDB,
      token: token
    })
    
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    });
  }

}
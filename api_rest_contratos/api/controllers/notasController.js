var Nota = require('../models/notaModel');


exports.list = function(req, res) {
	Nota.find(function(err, messages) {
		res.json(messages);
        
	});
};

exports.create = function(req, res) {
	var nota = new Nota(req.body);

	nota.save(function(err, newMessage) {
		if (err) { 
			res.json(400, err.message);
		}
		else {
			res.json(newMessage);
		}
	});
};

exports.delete = (req,res)=>{	
	Nota.findByIdAndRemove(req.params.id,(err,item)=>{
		if(err){
			res.json(err)
		}
		else
			res.json('nota eliminada Satisfactoriamente')
	})
	//res.send(req.params)
	
}

exports.edit = (req,res, next)=>{	
	Nota.findById(req.params.id,(err,item)=>{
		if(err){
			res.json(err)
		}
		else if(!item){
			return next(new Error('No se pudo cargar el documento'))
		}
		else{
			item.titulo = req.body.titulo
			item.texto = req.body.texto
			item.fecha = req.body.fecha
			item.save()
			.then(item => res.json("Seactualizo exitosamente"))
			.catch(err=>res.jso(err))
		}
	})
	//res.send(req.params)
	
}

exports.nota =(req,res) =>{
	console.log(req.params.id)
	Nota.findById(req.params.id,(err,item)=>{
			if(err){
				res.json(err)
			}
			else{
				res.json(item)
			}	
	})
}


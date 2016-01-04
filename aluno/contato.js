/**
 * Created by bruno on 01/12/15.
 */
 var AbstractContato = require('../cliente/abstractContato.js');
 function Contato(telefone, nome){
 	this.telefone = telefone;	
 	this.nome = nome;
 	var contato = [telefone, nome];

 	Contato.prototype = Object.create(AbstractContato.prototype);

 	Contato.prototype.getNome = function(){
 		return this.nome;
 	}

 	Contato.prototype.getTelefone = function(){
 		return this.telefone;
 	}

 	Contato.prototype.setNome = function(novoNome){
 		this.nome = novoNome;
 		return true;
 	}

 	Contato.prototype.setTelefone = function(novoTelefone){
 		this.telefone = novoTelefone;
 		return true;
 	}
}

 module.exports = Contato;
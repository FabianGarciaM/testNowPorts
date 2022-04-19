'use strict'

const User = require('../models/user');
const Contact = require('../models/contacts');

function testdev (req, res){
    console.log('controler user')
    res.status(202).json('todo bien...');
}

function login(req, res){
  console.log(req.body)
  if(req.body.user == 'fabian' && req.body.password == '12345'){
    res.status(202).send({token:'123678'});
    res.end();
  }else{
    res.status(300)
    res.send({message:'error'})
    res.end();
  }
}

//create a new register in model user
function user(req, res){
  
}
//create a new register in model contact
function contacts(req, res){
  console.log(req.body.Fname, req.body.Lname, req.body.Phone);
  try {
    const contact = new Contact({
      FirstName: req.body.Fname,
      LastName: req.body.Lname,
      Phone: req.body.Phone,
    });
    contact.save((err, ContactInsert) =>{
      if(err){
        console.log("+'+'+'+'+'+'+'")
        res.status(500).send({ message: error });
        res.end();
      }else{
        console.log(ContactInsert);
        res.status(202).send({ message: 'Contact saved' });
        res.end();
      }
    });
    // res.status(202).send({message: 'data saved'})
    // res.end();
  } catch (error) {
    console.log("*¨*¨*¨*¨*¨*¨*¨*")
    res.status(400).send({ message: error });
    res.end();
  }
}
//response in json array with all contacts 
function getcontact(req, resp){
  Contact.find({},(err, Contacts) => {
    if (err) {
      resp.status(500).send({ message: error });
      resp.end();
    } else {
      resp.status(202).send(Contacts);
      resp.end();
    }
  });
}

//busqueda de contacto por id
function getcontactsforid(req, resp){

}

function deletecontacts(req, resp){
  Contact.findByIdAndRemove(req.body.id, (err)=>{
    if(err){
      resp.status(500).send({ message: error });
      resp.end();
    }else{
      resp.status(202).send({ message: 'delete success'});
      resp.end();
    }
  });
}

function updatecontacts(req, resp){
  console.log(req.body);
  Contact.updateOne({_id:req.body.id}, {
    $set:{
      FirstName: req.body.fname,
      LastName: req.body.lname,
      Phone: req.body.phone
    }
  }, (err)=>{
    if (err) {
      resp.status(500).send({ message: error });
      resp.end();
    } else {
      resp.status(202).send({ message: "Update success" });
      resp.end();
    }
  })
}

module.exports = {
  testdev,
  login,
  user,
  contacts,
  getcontact,
  getcontactsforid,
  deletecontacts,
  updatecontacts
};
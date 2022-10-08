const Pet = require('../models/pets.model')

// create pet
module.exports.createPet = (req,res)=>{
    Pet.create(req.body)
    .then(pet=>res.json(pet))
    .catch(err=>res.status(400).json({err}))
}

// get all
module.exports.allPets = (req,res)=>{
    Pet.find()
    .then(pet=>res.json(pet))
    .catch(err=>res.status(400).json({err}))
}

// get one
module.exports.getOnePet = (req,res)=>{
    Pet.findById({_id:req.params.id})
        .then(pet=>res.json(pet))
        .catch(err=>res.status(400).json({err}))
}

// update one
module.exports.updatePet = (req,res)=>{ // runValidators below is very important!!!!
    Pet.findByIdAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators:true})
        .then(updatedPet=>res.json(updatedPet))
        .catch(err=>res.status(400).json({err}))
}

// delete one
module.exports.deletePet=(req,res)=>{
    Pet.deleteOne({_id:req.params.id})
    .then(deletedPet=>res.json(deletedPet))
    .catch(err=>res.status(400).json({err}))
}
const PetController = require('../controllers/pets.controller')

module.exports = (app) => {
    //get all
    app.get('/api/allPets', PetController.allPets)

    // get one
    app.get('/api/pets/:id', PetController.getOnePet)

    // create one
    app.post('/api/pets', PetController.createPet)

    // update one
    app.put('/api/pets/:id', PetController.updatePet)

    //delete one
    app.delete('/api/pets/:id', PetController.deletePet)
    
}
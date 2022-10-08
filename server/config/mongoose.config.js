const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/belt-exam-react',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
.then(()=> console.log('Established connection to db'))
.catch(err=>console.log('Something went wrong.',err))
const express = require('express');
const app = express();
const authorRoutes = require('./routes/pets.routes')
const port = 8000;
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded( {extended: true} ));

require('./routes/pets.routes')(app)
require('./config/mongoose.config')
    
app.listen(port, () => console.log(`Listening on port: ${port}`) );
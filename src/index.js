const express = require('express');
require('./database');
const router = require('./routes/routes');
const cors = require('cors');

const app = express();
app.use(express.json())

app.set('port', process.env.PORT || 3333)
app.use(cors())


 app.use('/api',router);



app.listen(app.get('port'));
console.log('Server on port', app.get('port'));

import express from 'express';
import ncs from 'nocopyrightsounds-api'
import route from './src/routes/index.js'
const port = 5000
const app = express();



app.use(express.json());

app.use('/', route);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

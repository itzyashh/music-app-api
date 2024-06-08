import express from 'express';
import route from './src/routes/index.js'
import './src/db/index.js'

const port = 5000
const app = express();



app.use(express.json());

app.use('/', route);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

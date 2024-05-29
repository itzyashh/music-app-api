import express from 'express';
import ncs from 'nocopyrightsounds-api'

const port = 5000
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
    })




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

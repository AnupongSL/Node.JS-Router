const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//เชื่อมโยงตัว routes 
app.use(require('./src/routes/routes'));

const port = 3000

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
    console.log("Press Ctrl + C to quit.");
})
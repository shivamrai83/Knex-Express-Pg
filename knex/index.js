var express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send('We Did it')
});


app.listen(3000,()=>console.log("Server is Running...."));

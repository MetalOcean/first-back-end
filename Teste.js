const express = require('express')
const app = express()
const Port = 3000

app.get(`/`, (req, res) => {
    console.log(`ENTROU AQUI`)
 res.send(`SALVE RAPAZIADA`)   
})

app.listen(Port, () => {
    console.log(`Meu texto ${Port}`) 
})
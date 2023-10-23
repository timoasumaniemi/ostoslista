const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const port = 3001



app.get("/",(request, response) =>{
    response.status(200).json({status:1, message: "Default api ok"})
});

app.listen(port, () =>{
    console.log(`Server is running at port ${port}`)
})
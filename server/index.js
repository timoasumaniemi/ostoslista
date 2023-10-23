const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
const port = 3001

const dbConfig = require('./dbConfig')
const mysql = require('mysql2/promise')

app.get("/",async (request, response) =>{
    const queryString = "SELECT * FROM item;"
    try{
        console.log("Opening DB Connection with: " + dbConfig.settings.host);
        const connection = await mysql.createConnection(dbConfig.settings);
        const [result] = await connection.execute(queryString);
        
        if(!result)
            result = []

        response.status(200).json({status:1, message: "Default api ok", data:result[0]})
    } catch(error){
        console.log(error.message)
        response.status(500).json({status:-1, message:error.message})
    }
});

app.listen(port, () =>{
    console.log(`Server is running at port ${port}`)
})
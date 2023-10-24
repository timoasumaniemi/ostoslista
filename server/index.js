const express = require('express')
const cors = require('cors')
const dbConfig = require('./dbConfig')
const mysql = require('mysql2/promise')

const app = express()
app.use(cors())
const port = 3001
const query_selectAllItems = "SELECT * FROM item;"

app.get("/", async (request, response) => {
    response.status(200).json({ message: `To see shoppinglist content, use '${dbConfig.settings.host}:${port}/api/shoppinglist' ` })
});

app.get("/api/shoppinglist", async (request, response) => {

    try {
        const connection = await mysql.createConnection(dbConfig.settings);
        const [result] = await connection.execute(query_selectAllItems);

        response.status(200).json(result)
    } catch (error) {
        console.log(error.message)
        response.status(500).json({ message: error.message })
    }
})

app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})
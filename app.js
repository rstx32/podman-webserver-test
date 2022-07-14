import express from 'express'
const app = express()

app.get('/', (req, res) => {
    res.send('Hello from Restu Indera!')
})

app.listen(80, () => {
    console.log(`web-server is listening on port 80...`)
})
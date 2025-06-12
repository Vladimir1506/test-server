// import express, {Request, Response} from 'express'
const express =require('express')

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello!-  !')
})

app.listen(port, () => {
    console.log(`Example app listing on port ${port}`)
})

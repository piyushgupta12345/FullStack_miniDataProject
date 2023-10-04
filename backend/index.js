const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.get('/api/v1/data',(req, res)=>{
    const dataObj = [
        {
            id:1,
            name:"Ajay",
            favNumkeen:"Disco"
        },
        {
            id:2,
            name:"Atul",
            favNumkeen:"Green Disco"
        },
        {
            id:3,
            name:"Aman",
            favNumkeen:"Aloo Bhungiya"
        },
        {
            id:4,
            name:"Achar",
            favNumkeen:"Tasty"
        }
    ]
    res.send(dataObj)
})

app.listen(PORT,()=>{
    console.log(`server started at the port ${PORT}`)
})
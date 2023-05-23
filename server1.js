const express = require('express')
const app = express()
const port = 4200;

app.get('/', (req, res)=>{
    res.send("hello world")
})

app.get('/users', (req, res)=>{
    res.send(["user1", "user2", "user3"])
})

app.post('/users', (req, res)=>{
    res.send("юзер добавлен")
})
app.delete('/users/:id', (req, res)=> {
    res.send(`юзерс ${req.params.id} удален`)
})

app.patch('/users/:id', (req,res)=> {
    res.send(`юзер с ID ${req.params.id} изменен`)
})
app.get('/admin', (req, res)=>{
    res.send("не хватает прав доступа")
})

app.listen(port, ()=> {
    console.log(`сервер запущен http://localhost:${port}`)
})
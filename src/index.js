const express = require('express')
require('./db/mongoose')
require('dotenv').config()

const userRouter = require('./router/user')
const taskRouter = require('./router/task')

const { errorHandler } = require('./middleware')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use('/users', userRouter)
app.use('/tasks', taskRouter)

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server running on port : http://localhost:${port}`)
})

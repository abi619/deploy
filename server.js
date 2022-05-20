require('dotenv/config')
const mongoose = require('mongoose')
const app = require('./app')
const {notFound, errorHandler} = require('./middlewares/errorMiddleware')

app.use(notFound)
app.use(errorHandler)

console.log(process.env.PORT)

mongoose.connect(process.env.MONGODB_URL_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('connected to mongoDB!'))
    .catch((err) => console.log(`${err.message}`))


const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log(`app running on port ${port}`)
})

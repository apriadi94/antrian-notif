const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

app.use(cors({ credentials: true }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

const port = process.env.APP_PORT

app.listen(port, () => console.log(`App Running On Port: ${port}`))
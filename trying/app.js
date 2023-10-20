const express = require("express")
const handlebars = require('express-handlebars')
const app = express()
const path = require("path")
const home = require('./routes/home')

app.engine("handlebars", handlebars.engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault:true,
        allowProtoMethodsByDefault: true,
    }
}))
app.set('view engine', 'handlebars')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.send("Running")
})

app.use('/home', home)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:8080`)
})
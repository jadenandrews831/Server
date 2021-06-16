const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('Public'))

app.listen(3000, function (err)
{
    if(err) console.log('HMM, SOMETHING WENT WRONG...')
    else console.log('listening on localhost:3000')
})
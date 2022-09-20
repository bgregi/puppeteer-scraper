const express = require('express')
const puppeteer = require('puppeteer')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.post('/', async (req, res) => {
    const url = req.body.url

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.screenshot({path: 'example.png'});
    
    await browser.close();
    
    res.send('deu boa')

})

const port = 3000
app.listen(port)
console.log(`Listening on port ${port}`)




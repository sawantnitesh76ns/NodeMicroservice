const app = require('express')();
const PORT = 3000;
const appid = process.env.APPID;


app.get('/app1', (req, res) => {
    console.log(appid)
    res.send(`appid: appp1 say heeellooooo!!!!`)
})

app.get('/app2', (req, res) => {
    res.send(`appid: appp2 say heeellooooo!!!!`)
})


app.get('/app3', (req, res) => {
    res.send(`appid: appp3 say heeellooooo!!!!`)
})

app.get('/admin', (req, res) => {
    res.send(`appid: appp4 ADMIN say heeellooooo!!!!`)
})

app.listen(PORT, (error) => {
    if (!error) {
        console.log(`Surprise surprise you man, it is running on port ${PORT}`);
    } else {
        console.log("It is not running bro, you got a job to fix these")
    }
})
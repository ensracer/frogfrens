const express = require("express")
const app = express()
app.use('/', express.static('./'))
// define the first route
app.get("/", function (req, res) {
    res.sendFile('./part10.html', { root: __dirname });
})

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));




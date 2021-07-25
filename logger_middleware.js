const express = require("express");
const chalk = require('chalk')

const PORT = 4002;

const app = express();


var cLogger = (req, res, next) => {
    let date = new Date();
    let date_format = `${date.getFullYear()}/${date.getMonth() + 1}[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}]`;
    let method = req.method;
    let url = req.url;
    let status = res.statusCode;
    let log = ` ${chalk.red("[")}${chalk.blue(date_format)} ${chalk.yellowBright("=>")} [${chalk.greenBright("Method")}:${method}][URL:${url}] : [] (Status:${status})${chalk.red("]")} `;
    

    res.logg = log;
    console.log("before next");
    next();
    console.log("after next");
}

//app.use(cLogger);

app.get("/", (req, res) => {
//   console.log("before inside");
  //  console.log("inside homepage "+res.logg);
  //    console.log("after inside");
    
      console.log(req.query);
//    res.send(JSON.stringify(req));  

    res.send("This is the home Page");

});


app.get("/getIt",  (req, res) => {
    res.send("getIt Route");
});


app.post("/postIt", (req, res) => {
  res.send("postIt Route");
});


app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
});




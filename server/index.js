const express = require("express");
var auth = require('basic-auth')
var jwt = require("jsonwebtoken");
var cors = require('cors')
const app = express();
const port = 3001;
const private_key = "secret";
app.use(express.json()) // for parsing application/json
// app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

  // function routeMiddleware(req,res,next){
  //     console.log('midlwr');
  //      console.log(req.body);
  //     if(req.params.pageName === 'abc'){
  //       next();
  //     }
  // next();
  // }
  // app.use(routeMiddleware);
// app.get('/:id/:name?',(req,resp)=>{
//     console.log();
//     return resp.send(`<h1>${req.params.id}</h1>`);
// })
app.use(cors());

function auth_middleware(req,res,next){
//   var user = auth(req);
//   console.log(user);
// if(user && user.name!=="admin" || user && user.pass!=="admin@123"){
//   return res.send("Not authenticated user");
// }
  const header = req.headers.authorization;
  const token = header.split(" ")[1];
  // console.log(header,"header");
  const verify = jwt.verify(token,private_key,function(err,data){
    console.log(err,data);
    if(err){
      res.json(err)
      return;
    }
  });
  // console.log(verify);
  next();
}

// app.use(auth_middleware);

app.get("/pages/:pageName/", (req, resp) => { 
  // console.log(req.query);
  return resp.send(`<h1>${req.params.pageName}</h1>`);
});
app.post('/product',auth_middleware,(req,res)=>{
  console.log(req.body);
const data = req.body;
res.json(data);
});

app.post('/login',(req,res) => {
console.log(req.body);
const token = jwt.sign(req.body,private_key,{expiresIn:10});
res.json({token});
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
// console.log("dsfds1");

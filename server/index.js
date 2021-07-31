const express = require("express");
const app = express();
const port = 3001;
app.use(express.json()) // for parsing application/json
// app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//   function routeMiddleware(req,res,next){
//       console.log('midlwr');
//       console.log(req);
//       if(req.params.pageName === 'abc'){
//         next();
//       }
//   return res.send("middleware error");
//   }
//   app.use(routeMiddleware);
// app.get('/:id/:name?',(req,resp)=>{
//     console.log();
//     return resp.send(`<h1>${req.params.id}</h1>`);
// })
app.get("/pages/:pageName", (req, resp) => {
  console.log();
  return resp.send(`<h1>${req.params.pageName}</h1>`);
});
app.post('/product',(req,res)=>{
    console.log(req.body);
const data = req.body
res.json(data);
});
function dd() {
  console.log("sdfs");
}
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
console.log("dsfds1");

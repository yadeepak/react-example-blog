const express = require("express");
require('dotenv').config()
var auth = require("basic-auth");
var mongoose = require("mongoose");
var jwt = require("jsonwebtoken");
var cors = require("cors");
var Blog = require("./models/blogs");
var multer = require('multer');
var fs = require("fs");
const app = express();
const port = process.env.PORT;
const private_key = "secret";
app.use(express.json()); // for parsing application/json
app.use("/my-uploads", express.static('my-uploads'))

mongoose
  .connect("mongodb+srv://react-mongo:<Mongo@123@12>@cluster0.bwioy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
  .then((data) => console.log("connected"))
  .catch((err) => console.log(err));
const db = mongoose.connection;
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

function auth_middleware(req, res, next) {
  //   var user = auth(req);
  //   console.log(user);
  // if(user && user.name!=="admin" || user && user.pass!=="admin@123"){
  //   return res.send("Not authenticated user");
  // }
  const header = req.headers.authorization;
  const token = header.split(" ")[1];
  // console.log(header,"header");
  const verify = jwt.verify(token, private_key, function (err, data) {
    console.log(err, data);
    if (err) {
      res.json(err);
      return;
    }
  });
  // console.log(verify);
  next();
}

//upload images
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'my-uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix+file.originalname)
  }
})

const upload = multer({ storage: storage })

// app.use(auth_middleware);
app.post("/add-blog",upload.single('image'),(req, resp) => {
  console.log(req.file);
  const blogObj = {...req.body,image:req.file.path};
  try {
    const blog = new Blog(blogObj);
    blog.save();
    return resp.json({ success: true });
  } catch (e) {
    console.log(e);
    return resp.json({ success: false, error: e });
  }
});

app.put("/update-blog/:title", async (req, resp) => {
  const blogObj = req.body;
  const title = req.params.title;
  try {
    const response = await Blog.findOneAndUpdate({ title }, blogObj, {
      new: true,
    });
    if (response) {
      return resp.json({ success: true, response });
    } else {
      return resp.json({ success: false, error: e });
    }
  } catch (e) {
    console.log(e);
    return resp.json({ success: false, error: e });
  }
});

app.get("/allblogs", async (req, res) => {
  const blogs = await Blog.find({});
  return res.json(blogs);
});

app.delete("/blog/remove/:blogId", async (req, res) => {
  const blogId = req.params.blogId;
  const response = await Blog.findByIdAndDelete(blogId);
  if (response) {
    return res.status(200).json({ success: true });
  }
  return res.status(500).json({ success: false });
});

app.get("/get-blog-by-title", async (req, res) => {
  const blog = await Blog.findOne({ title: req.query.title });
  return res.status(200).json(blog);
});

app.get("/pages/:pageName/", (req, resp) => {
  // console.log(req.query);
  return resp.send(`<h1>${req.params.pageName}</h1>`);
});

app.post("/product", auth_middleware, (req, res) => {
  console.log(req.body);
  const data = req.body;
  res.json(data);
});

app.post("/login", (req, res) => {
  console.log(req.body);
  const token = jwt.sign(req.body, private_key, { expiresIn: 10 });
  res.json({ token });
});

app.listen(port || 3001, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
// console.log("dsfds1");

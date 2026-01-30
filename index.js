const express = require("express");
const app = express();
const port =8080;
const { v4: uuidv4 } = require("uuid");

const path = require("path")

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")))


app.get("/posts",(req,res) =>{
    res.render("index.ejs", {posts})
})

app.get("/posts/new", (req,res) => {
    res.render("new.ejs")
})

app.get("/posts/:id", (req,res) => {
    // res.send("Working");
    let {id} = req.params;
    // console.log(id);
    const post = posts.find((p) => id == p.id);
    res.render("show.ejs", {post})

})

app.post("/posts", (req,res) => {
    
    let{username, content} = req.body;
    let id = uuidv4();
    posts.push({id,username, content})
    res.redirect("/posts");
})

app.patch("/posts/:id", (req,res) =>{
    let {id} = req.params;
    let newcontent = req.body.content;
    let post = post.find((p) => id == p.id);
    post.content = newcontent;
    console.log(post);
   res.send("working")
})

app.get("/posts/:id/edit" ,(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p) => id == p.id);
    res.render("edit.ejs");
});

let posts = [
  { id : uuidv4(),
    username: "University of waterloo",
    content: "some waterloo cs majors are miserable, I am." },
  { id : uuidv4(),
    username: "John Doe", 
    content: "Which is the best shawerma at Waterloo?" },
  { id:uuidv4(),
    username: "Messi", 
    content: "I have to admit, Ronaldo is better!" },
];





app.listen(port,() =>{
    console.log(`listening on port, ${port}`);
});

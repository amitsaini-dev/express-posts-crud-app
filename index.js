const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/js")));

let posts = [
    {
        username: "amit",
        content: "I love coding",
    },
    {
        username: "arpit",
        content: "I am learning ai ml",
    },
    {
        username: "Akash",
        content: "I am new to coding",
    }
];

const port = 8080;

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
})

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
})

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    posts.push({ username, content });
    res.redirect("/posts");
})



app.listen(port, () => {
    console.log(`App is listining at port ${port}`);
})

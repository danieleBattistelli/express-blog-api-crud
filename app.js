const express = require("express");
const app = express();
const port = 3000;
const postsRouters = require("./routers/posts")

app.use("/posts", express.static('public'));
app.use(express.json());
app.use("/posts", postsRouters);
app.listen(port, ()=>{
    console.log(`server in esecuzione su http://localhost:${port}/posts`);
});

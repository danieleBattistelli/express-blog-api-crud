const express = require("express");
const app = express();
const port = 3000;
const postsRouters = require("./routers/posts");
const handleError = require("./middlewares/handleError");


app.use("/posts", express.static('public'));
app.use(express.json());
app.use("/posts", postsRouters);

app.use(handleError);

app.listen(port, () => {
    console.log(`server in esecuzione su http://localhost:${port}/posts`);
});

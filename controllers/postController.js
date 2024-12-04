const posts = require("../data/posts");

//index
const index = (req,res)=>{
    res.json({
        data : posts,
        count : posts.length
    });
};

//show
const show = (req,res)=>{
    const post = posts.find(p=>p.id === parseInt(req.params.id));
    if(post){
        res.json(post);
    }else{
        res.status(404).send('post non trovato');
    }
};

//create
const create = (req, res) => {
    res.json('creiamo un nuovo elemento');
};

//update
const update = (req, res) => {
    const postId = req.params.id;
    res.json(`modifichiamo i dati di uno specifico elemento ${postId}`);
};

// modify
const modify = (req, res) => {
    const postId = req.params.id;
    res.json(`modifichiamo gli specifici dati uno specifico elemento ${postId}`);
};

// destroy
const destroy = (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = posts.findIndex(p => p.id === postId);
    if (postIndex !== -1){
        posts.splice(postIndex, 1);
    res.send(`Cancellazione del post ${postId}`); 
    } else { 
        res.status(404).send('Post non trovato'); 
    } 
};



module.exports = {
    index,
    show,
    create,
    update,
    modify,
    destroy
}
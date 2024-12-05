const posts = require("../data/posts");

//index
const index = (req, res) => {
    const tag = req.query.tag;
    let filterPosts = posts;

    if (tag) {
        filterPosts = posts.filter(post => post.tags.includes(tag));
    }

    res.json({
        data: filterPosts,
        count: filterPosts.length
    });
};

//show
const show = (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (post) {
        res.json(post);
    } else {
        res.sendStatus(404);
    }
};

//create o store
const store = (req, res) => {
    //controllo i dati inseriti su console log
    console.log(req.body)
    //Ora devo calcolare l'id consecutivo all'ultimo elemento dell'array se array nullo id =1
    //const id = posts[posts.length-1].id+1 => vale solo per array non nullo
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    //Costruisco il json con newPostId e body inserito dal client ( Postman)
    const newItem = { id, ...req.body }
    //ora puscio l'oggetto nell'array posts
    posts.push(newItem);
    //ora mando la risposta con quell'oggetto
    res.status(201).json(newItem);

};

//update
const update = (req, res) => {
    //con find prendo l'elemento dell'array che ha lo stesso id dell'id della query string
    //serve parseInt perche' su quesry string id e' una stringa e su posts e' un numero
    const post = posts.find(p => p.id === parseInt(req.params.id));
    //se etrovato
    if (post) {
        //Tramite object assign vado a copiare i valori di tutte le proprieta' 
        //nell'oggetto target , post in questo caso 
        Object.assign(post, req.body);
        res.json(post);
    } else {// se non trovato // status 404
        res.sendStatus(404);
    }
};

// modify
const modify = (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    //se etrovato
    if (post) { Object.keys(req.body).forEach(key => { 
        post[key] = req.body[key]; }); 
        res.json(post); 
    } else {
        res.status(404).send({ error: 'Post non trovato' });
    }
};

// destroy
const destroy = (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = posts.findIndex(p => p.id === postId);
    if (postIndex !== -1) {
        posts.splice(postIndex, 1);
        console.log("Lista aggiornata dei post", posts);
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
};



module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}
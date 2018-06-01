const express = require ("express");
const consolidate = require ("consolidate");
const handlebars = require ("handlebars");
engines = require('consolidate');


const app = express();

app.engine("hbs", consolidate.handlebars);

app.set("views", "./views");
app.set("view engine", "hbs");

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.render("index", {
        
    });
});

app.listen(3000, console.log ("conectado"));
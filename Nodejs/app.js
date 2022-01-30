
var fs=require('fs');

var express=require('express');
var path=require('path');

var app=express();
var ejsLayouts =require('express-ejs-layouts');
var bodyparser=require('body-parser');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/app_server/views'));


app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.use(ejsLayouts);
app.use('/public', express.static (path.join(__dirname, 'public')));

var routeGiris=require('./app_server/Routers/loginRouters');
var routeGorevler=require('./app_server/Routers/GorevlerRouters');
var routeGorevlerEkle=require('./app_server/Routers/GorevEkleRouters');

app.use('/giris',routeGiris);
app.use('/gorevler',routeGorevler);
app.use('/gorevekle',routeGorevlerEkle);
app.use('/cikis',routeGiris);

app.listen(8000);

let bodyParser = require('body-parser');
let mong = require('mongoose');
let ex = require('express');
let app = ex();

//route
app.use(bodyParser.json());
// app.use(function(req,res,next){
// 	res.header("Access-Contol-Allow-Origin","*");
// 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// 	next();
// });

app.use('/',function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS")
    next();
});


let petugasRoute = require('./petugas/petugasRoute.js');
app.use('/api',petugasRoute);

let provinsiRoute = require('./provinsi/provinsiRoute.js');
app.use('/api',provinsiRoute);

let rumahsakitRoute = require('./rumahsakit/rumahsakitRoute.js');
app.use('/api',rumahsakitRoute);

let perawatanRoute = require('./perawatan/perawatanRoute.js');
app.use('/api',perawatanRoute);

let pendaftaranRoute = require('./pendaftaran/pendaftaranRoute.js');
app.use('/api',pendaftaranRoute);

let perawatanDiagnosaRoute = require('./perawatanDiagnosa/perawatanDiagnosaRoute.js');
app.use('/api',perawatanDiagnosaRoute);


//mong.connect('mongodb://localhost:27017/DBapotek');
mong.connect('mongodb://egi:egi1213@ds121345.mlab.com:21345/dbrumahsakit');
app.listen(8889);
Provinsi = require('./provinsiModel.js');

module.exports.getProvinsi = function(callback,limit){
    Provinsi.find(callback).limit(limit);
}

module.exports.getProvinsiById = function(_id,callback){
    Provinsi.findById(_id,callback);
}

module.exports.createProvinsi = function(provinsi,callback){
    Provinsi.create(provinsi,callback);
}

module.exports.deleteProvinsi = function(id,callback){
    Provinsi.findByIdAndRemove(id,callback);
}

module.exports.updateProvinsi = function(id,provinsi,callback){
    Provinsi.findByIdAndUpdate(id,provinsi,callback);
}
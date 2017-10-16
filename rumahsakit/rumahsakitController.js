RumahSakit = require('./rumahsakitModel.js');

module.exports.getRumahSakit = function(callback,limit){
    RumahSakit.find(callback).limit(limit);
}

module.exports.getRumahSakitById = function(_id,callback){
    RumahSakit.findById(_id,callback);
}

module.exports.createRumahSakit = function(provinsi,callback){
    RumahSakit.create(provinsi,callback);
}

module.exports.deleteRumahSakit = function(id,callback){
    RumahSakit.findByIdAndRemove(id,callback);
}

module.exports.updateRumahSakit = function(id,provinsi,callback){
    RumahSakit.findByIdAndUpdate(id,provinsi,callback);
}
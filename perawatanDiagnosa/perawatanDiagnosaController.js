PerawatanDiagnosa = require('./perawatanDiagnosaModel.js');

module.exports.getPerawatanDiagnosa = function(callback,limit){
    PerawatanDiagnosa.find(callback).limit(limit);
}

module.exports.getPerawatanDiagnosaById = function(_id,callback){
    PerawatanDiagnosa.findById(_id,callback);
}

module.exports.createPerawatanDiagnosa = function(provinsi,callback){
    PerawatanDiagnosa.create(provinsi,callback);
}

module.exports.deletePerawatanDiagnosa = function(id,callback){
    PerawatanDiagnosa.findByIdAndRemove(id,callback);
}

module.exports.updatePerawatanDiagnosa = function(id,provinsi,callback){
    PerawatanDiagnosa.findByIdAndUpdate(id,provinsi,callback);
}
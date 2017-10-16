Perawatan = require('./perawatanModel.js');

module.exports.getPerawatan = function(callback,limit){
    Perawatan.find(callback).limit(limit);
}

module.exports.getPerawatanById = function(_id,callback){
    Perawatan.findById(_id,callback);
}

module.exports.createPerawatan = function(perawatan,callback){
    Perawatan.create(perawatan,callback);
}

module.exports.deletePerawatan = function(id,callback){
    Perawatan.findByIdAndRemove(id,callback);
}

module.exports.updatePerawatan = function(id,perawatan,callback){
    Perawatan.findByIdAndUpdate(id,perawatan,callback);
}
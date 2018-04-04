let cleanRoom = function(){
    return new Promise(function(resolve, reject){
        resolve('Cleaned the room');
    });
};

let removeGarbage = function(message){
    return new Promise(function(resolve, reject){
        resolve (message= ' remove garbage');
    });
};

cleanRoom().then(function(result){
    return removeGarbage(result);
}).then(function(result){
    console.log(result);
});
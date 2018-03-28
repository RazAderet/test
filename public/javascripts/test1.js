
var testHandler = (function(){
    var my = {};

    my.HandleBasicFlow= function(req) {
        console.log("Hello");
        return {"raz":123};
    };

    return my;
})();

module.exports = testHandler;

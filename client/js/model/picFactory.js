myApp.factory("picFactory", function($http){
  var pics = ["/static/pics/art.jpg", "/static/pics/babyseal.jpg", "/static/pics/blackseal.jpg", "/static/pics/blowfish.jpg", "/static/pics/body.jpg", "/static/pics/lizard.jpg", "/static/pics/rabbit.jpg", "/static/pics/redseal.jpg", "/static/pics/sealorange.jpg", "/static/pics/sealrock.jpg", "/static/pics/stonefish.jpg", "/static/pics/whiteseal.jpg", "/static/pics/woodfish.jpg"];
  var factory = {};

  factory.index = function(callback){
      callback(pics);
  }
  return factory;
})

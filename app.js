var steem = require("steem");
steem.api.setOptions({url: 'https://api.steemit.com'});

var syn = require('synchronize');
var fiber = sync.fiber;
var await = syn.await;
var defer = sync.defer;

try {
  fiber(function(){
      var obj = await (steem.api.getAccounts(['ned','dan'], defer()));
      console.log(obj);
      obj = await(steem.api.getAccounts(['nhj12311'],defer()));
      console.log(obj);
    });
  } catch(err){
    console.log(err);
  }

var level = require('level');

var db = level("./test-db");

db.put("activity", "demo level db",  function (err) {
  if (err) {
    console.log("opss", err);
  } else  {
    db.get("activity", function(err, value) {
      if (err) {
        console.log("opps", err);
      } else {
        console.log("data is ", value);
      }
    })
  }
})
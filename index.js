var level = require('level');

var db = level("./test-db");

db.put("activity", "demo level db",  function (err) {
  if (err) {
    console.log("opss", err);
  } else  {
    console.log("saved");
  }
})
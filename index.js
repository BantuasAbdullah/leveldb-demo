var level = require('level');

var db = level("./test-db");
saveActivity("demo level db part 2");

function saveActivity(name) {
  db.put("activity", name,  function (err) {
    if (err) {
      console.log("opss", err);
    } else  {
      getActivity();
    }
  })
}
function getActivity() {
  db.get("activity", function(err, value) {
    if (err) {
      console.log("opps", err);
    } else {
      console.log("data is ", value);
    }
  })
}

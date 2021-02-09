var level = require('level');

var db = level("./test-db", {valueEncoding:"json"});
async function main() {
  await saveActivity({name:"LevelDB Demo", participants:["Lupin", "Luffy"]});
  var data = await getActivity();
  console.log("new data is ", data);
  console.log(typeof data);

  await deleteActivity();
  try {
    await getActivity();
  } catch(e) {
    console.log("data is deleted");
  }
}
main();

async function saveActivity(name) {
  await db.put("activity", name);
}
async function getActivity() {
   return await db.get("activity");
}

async function deleteActivity() {
  await db.del("activity");
}

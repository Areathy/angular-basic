var fs = require("fs");
var helpers = require("./helpers");
jsonfile = __dirname + "/data.json";

//GET api/taskStatuses
function getTaskStatuses(req, res) {
  console.log(req.method, req.url);
  taskStatuses = JSON.parse(fs.readFileSync(jsonfile, "utf8")).taskStatuses;
  console.log("Response: ", taskStatuses);
  res.send(helpers.toCamel(taskStatuses));
}

//POST api/taskStatuses
function postTaskStatuses(req, res) {
  console.log(req.method, req.url);
  taskStatuses = JSON.parse(fs.readFileSync(jsonfile)).taskStatuses;
  taskStatuses.push(req.body);
//   console.log("Response: ", taskStatuses);
  fs.writeFileSync(
    jsonfile,
    JSON.stringify({
      ...JSON.parse(fs.readFileSync(jsonfile)),
      taskStatuses: taskStatuses,
    }),
    "utf8"
  );
  res.send(helpers.toCamel(req.body));
}

//PUT api/taskStatuses
function putTaskStatuses(req, res) {
  console.log(req.method, req.url);
  taskStatuses = JSON.parse(fs.readFileSync(jsonfile)).taskStatuses;
  taskStatuses = taskStatuses.map((taskStatus) =>
  taskStatus.taskStatusID == req.body.taskStatusID
      ? req.body
      : taskStatus
  );
  console.log("Response: ", taskStatuses);
  fs.writeFileSync(
    jsonfile,
    JSON.stringify({
      ...JSON.parse(fs.readFileSync(jsonfile)),
      taskStatuses: taskStatuses,
    }),
    "utf8"
  );
  res.send(helpers.toCamel(req.body));
}

//DELETE api/taskStatuses
function deleteTaskStatuses(req, res) {
  console.log(req.method, req.url);
  taskStatuses = JSON.parse(fs.readFileSync(jsonfile)).taskStatuses;
  taskStatuses = taskStatuses.filter(
    (taskStatus) =>
    taskStatus.ttaskStatusID != req.query.taskStatusID
  );
  console.log("Response: ", taskStatuses);
  fs.writeFileSync(
    jsonfile,
    JSON.stringify({
      ...JSON.parse(fs.readFileSync(jsonfile)),
      taskStatuses: taskStatuses,
    }),
    "utf8"
  );
  res.send(helpers.toCamel(req.body));
}

//GET /api/taskStatuses/search/:searchby/:searchtext
function searchTaskStatuses(req, res) {
  console.log(req.method, req.url);
  console.log(req.params);
  taskStatuses = JSON.parse(
    fs.readFileSync(jsonfile, "utf8")
  ).taskStatuses;
  req.params.searchtext = (req.params.searchtext || "").toUpperCase();
  req.params.searchby = helpers.toCamelCase(req.params.searchby || "");
  console.log(req.params);
  taskStatuses = taskStatuses.filter((taskStatus) => {
    value = (taskStatus[req.params.searchby] || "").toUpperCase();
    return value.indexOf(req.params.searchtext) >= 0;
  });

  console.log("Response: ", taskStatuses);
  res.send(helpers.toCamel(taskStatuses));
}


exports.getTaskStatuses = getTaskStatuses;
exports.postTaskStatuses = postTaskStatuses;
exports.putTaskStatuses = putTaskStatuses;
exports.deleteTaskStatuses = deleteTaskStatuses;
exports.searchTaskStatuses = searchTaskStatuses;

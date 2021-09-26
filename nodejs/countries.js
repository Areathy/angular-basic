var fs = require("fs");
var helpers = require("./helpers");
jsonfile = __dirname + "/data.json";

//GET api/countries
function getCountries(req, res) {
  console.log(req.method, req.url);
  countries = JSON.parse(fs.readFileSync(jsonfile, "utf8")).countries;
  //console.log("Response: ", countries);
  res.send(helpers.toCamel(countries));
}

//POST api/countries
function postCountries(req, res) {
  console.log(req.method, req.url);
  countries = JSON.parse(fs.readFileSync(jsonfile)).countries;
  countries.push(req.body);
  console.log("Response: ", countries);
  fs.writeFileSync(
    jsonfile,
    JSON.stringify({
      ...JSON.parse(fs.readFileSync(jsonfile)),
      countries: countries,
    }),
    "utf8"
  );
  res.send(helpers.toCamel(req.body));
}

//PUT api/countries
function putCountries(req, res) {
  console.log(req.method, req.url);
  countries = JSON.parse(fs.readFileSync(jsonfile)).countries;
  countries = countries.map((country) =>
  country.countryID == req.body.countryID
      ? req.body
      : country
  );
  console.log("Response: ", countries);
  fs.writeFileSync(
    jsonfile,
    JSON.stringify({
      ...JSON.parse(fs.readFileSync(jsonfile)),
      countries: countries,
    }),
    "utf8"
  );
  res.send(helpers.toCamel(req.body));
}

//DELETE api/countries
function deleteCountries(req, res) {
  console.log(req.method, req.url);
  countries = JSON.parse(fs.readFileSync(jsonfile)).countries;
  countries = countries.filter(
    (country) =>
    country.countryID != req.query.countryID
  );
  console.log("Response: ", countries);
  fs.writeFileSync(
    jsonfile,
    JSON.stringify({
      ...JSON.parse(fs.readFileSync(jsonfile)),
      countries: countries,
    }),
    "utf8"
  );
  res.send(helpers.toCamel(req.body));
}

//GET /api/countries/search/:searchby/:searchtext
function searchCountries(req, res) {
  console.log(req.method, req.url);
  console.log(req.params);
  countries = JSON.parse(
    fs.readFileSync(jsonfile, "utf8")
  ).countries;
  req.params.searchtext = (req.params.searchtext || "").toUpperCase();
  req.params.searchby = helpers.toCamelCase(req.params.searchby || "");
  console.log(req.params);
  countries = countries.filter((Country) => {
    value = (Country[req.params.searchby] || "").toUpperCase();
    return value.indexOf(req.params.searchtext) >= 0;
  });

  console.log("Response: ", countries);
  res.send(helpers.toCamel(countries));
}


exports.getCountries = getCountries;
exports.postCountries = postCountries;
exports.putCountries = putCountries;
exports.deleteCountries = deleteCountries;
exports.searchCountries = searchCountries;

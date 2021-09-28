var fs = require("fs");
jsonfile = __dirname + "/data.json";

data = {
  projects: [
    {
      projectID: 1,
      projectName: "Bug Tracking System",
      dateOfStart: "2023-05-07",
      teamSize: 6,
      active: true,
      status: "In Force",
      clientLocationID: 1,
      clientLocation: {
        clientLocationID: 1,
        clientLocationName: "Boston",
      },
    },
    {
      projectID: 2,
      projectName: "COVID-19 Tracker",
      dateOfStart: "2020-03-15",
      teamSize: 17,
      Active: false,
      status: "Support",
      clientLocationID: 2,
      clientLocation: {
        clientLocationID: 2,
        clientLocationName: "London",
      },
    },
  ],
  roles: [
    {
      id: 1,
      roleName: "Admin",
    },
    {
      id: 2,
      roleName: "Employee",
    },
  ],
  users: [
    {
      id: 1,
      UserName: "admin",
      Email: "admin@gmail.com",
      Password: "Admin123#",
      Role: "Admin",
    },
    {
      id: 2,
      UserName: "employee",
      Email: "employee@gmail.com",
      Password: "Employee123#",
      Role: "Employee"
    },
    {
      id: 3,
      UserName: "henrietha",
      Email: "devhenrietha@gmail.com",
      Password: "Henrietha123#",
      Role: "Software Engineer"
    },
  ],
  clientLocations: [
    {
      clientLocationID: 1,
      clientLocationName: "Boston",
    },
    {
      clientLocationID: 2,
      clientLocationName: "London",
    },
    {
      clientLocationID: 3,
      clientLocationName: "New Jersy",
    },
  ],
  countries: [
    { countryID: 45, countryName: "Afghanistan" },
    { countryID: 135, countryName: "Albania" },
    { countryID: 33, countryName: "Algeria" },
    { countryID: 185, countryName: "Andorra" },
    { countryID: 55, countryName: "Angola" },
    { countryID: 184, countryName: "Antigua and Barbuda" },
    { countryID: 30, countryName: "Argentina" },
    { countryID: 133, countryName: "Armenia" },
    { countryID: 51, countryName: "Australia" },
    { countryID: 90, countryName: "Austria" },
    { countryID: 89, countryName: "Azerbaijan" },
    { countryID: 170, countryName: "Bahamas" },
    { countryID: 153, countryName: "Bahrain" },
    { countryID: 7, countryName: "Bangladesh" },
    { countryID: 174, countryName: "Barbados" },
    { countryID: 87, countryName: "Belarus" },
    { countryID: 74, countryName: "Belgium" },
    { countryID: 173, countryName: "Belize" },
    { countryID: 85, countryName: "Benin" },
    { countryID: 160, countryName: "Bhutan" },
    { countryID: 82, countryName: "Bolivia" },
    { countryID: 126, countryName: "Bosnia and Herzegovina" },
    { countryID: 144, countryName: "Botswana" },
    { countryID: 4, countryName: "Brazil" },
    { countryID: 169, countryName: "Brunei" },
    { countryID: 98, countryName: "Bulgaria" },
    { countryID: 63, countryName: "Burkina Faso" },
    { countryID: 94, countryName: "Burundi" },
    { countryID: 69, countryName: "Cambodia" },
    { countryID: 57, countryName: "Cameroon" },
    { countryID: 34, countryName: "Canada" },
    { countryID: 167, countryName: "Cape Verde" },
    { countryID: 118, countryName: "Central African Republic" },
    { countryID: 72, countryName: "Chad" },
    { countryID: 61, countryName: "Chile" },
    { countryID: 1, countryName: "China" },
    { countryID: 27, countryName: "Colombia" },
    { countryID: 161, countryName: "Comoros" },
    { countryID: 117, countryName: "Costa Rica" },
    { countryID: 125, countryName: "Croatia" },
    { countryID: 73, countryName: "Cuba" },
    { countryID: 155, countryName: "Cyprus" },
    { countryID: 80, countryName: "Czech Republic" },
    { countryID: 18, countryName: "Democratic Republic of the Congo" },
    { countryID: 110, countryName: "Denmark" },
    { countryID: 157, countryName: "Djibouti" },
    { countryID: 186, countryName: "Dominica" },
    { countryID: 88, countryName: "Dominican Republic" },
    { countryID: 64, countryName: "Ecuador" },
    { countryID: 14, countryName: "Egypt" },
    { countryID: 107, countryName: "El Salvador" },
    { countryID: 159, countryName: "Equatorial Guinea" },
    { countryID: 109, countryName: "Eritrea" },
    { countryID: 150, countryName: "Estonia" },
    { countryID: 13, countryName: "Ethiopia" },
    { countryID: 181, countryName: "Federated States of Micronesia" },
    { countryID: 156, countryName: "Fiji" },
    { countryID: 113, countryName: "Finland" },
    { countryID: 20, countryName: "France" },
    { countryID: 147, countryName: "Gabon" },
    { countryID: 146, countryName: "Gambia" },
    { countryID: 120, countryName: "Georgia" },
    { countryID: 15, countryName: "Germany" },
    { countryID: 46, countryName: "Ghana" },
    { countryID: 76, countryName: "Greece" },
    { countryID: 179, countryName: "Grenada" },
    { countryID: 65, countryName: "Guatemala" },
    { countryID: 75, countryName: "Guinea" },
    { countryID: 148, countryName: "Guinea-Bissau" },
    { countryID: 158, countryName: "Guyana" },
    { countryID: 81, countryName: "Haiti" },
    { countryID: 91, countryName: "Honduras" },
    { countryID: 84, countryName: "Hungary" },
    { countryID: 172, countryName: "Iceland" },
    { countryID: 3, countryName: "Indonesia" },
    { countryID: 16, countryName: "Iran" },
    { countryID: 36, countryName: "Iraq" },
    { countryID: 119, countryName: "Ireland" },
    { countryID: 96, countryName: "Israel" },
    { countryID: 22, countryName: "Italy" },
    { countryID: 53, countryName: "Ivory Coast" },
    { countryID: 138, countryName: "Jamaica" },
    { countryID: 9, countryName: "Japan" },
    { countryID: 104, countryName: "Jordan" },
    { countryID: 59, countryName: "Kazakhstan" },
    { countryID: 31, countryName: "Kenya" },
    { countryID: 178, countryName: "Kiribati" },
    { countryID: 127, countryName: "Kuwait" },
    { countryID: 111, countryName: "Kyrgyzstan" },
    { countryID: 102, countryName: "Laos" },
    { countryID: 143, countryName: "Latvia" },
    { countryID: 123, countryName: "Lebanon" },
    { countryID: 139, countryName: "Lesotho" },
    { countryID: 129, countryName: "Liberia" },
    { countryID: 103, countryName: "Libya" },
    { countryID: 187, countryName: "Liechtenstein" },
    { countryID: 134, countryName: "Lithuania" },
    { countryID: 165, countryName: "Luxembourg" },
    { countryID: 141, countryName: "Macedonia" },
    { countryID: 54, countryName: "Madagascar" },
    { countryID: 67, countryName: "Malawi" },
    { countryID: 40, countryName: "Malaysia" },
    { countryID: 171, countryName: "Maldives" },
    { countryID: 66, countryName: "Mali" },
    { countryID: 168, countryName: "Malta" },
    { countryID: 130, countryName: "Mauritania" },
    { countryID: 151, countryName: "Mauritius" },
    { countryID: 10, countryName: "Mexico" },
    { countryID: 128, countryName: "Moldova" },
    { countryID: 188, countryName: "Monaco" },
    { countryID: 137, countryName: "Mongolia" },
    { countryID: 162, countryName: "Montenegro" },
    { countryID: 37, countryName: "Morocco" },
    { countryID: 49, countryName: "Mozambique" },
    { countryID: 25, countryName: "Myanmar" },
    { countryID: 140, countryName: "Namibia" },
    { countryID: 192, countryName: "Nauru" },
    { countryID: 44, countryName: "Nepal" },
    { countryID: 60, countryName: "Netherlands" },
    { countryID: 121, countryName: "New Zealand" },
    { countryID: 108, countryName: "Nicaragua" },
    { countryID: 62, countryName: "Niger" },
    { countryID: 6, countryName: "Nigeria" },
    { countryID: 48, countryName: "North Korea" },
    { countryID: 116, countryName: "Norway" },
    { countryID: 136, countryName: "Oman" },
    { countryID: 5, countryName: "Pakistan" },
    { countryID: 190, countryName: "Palau" },
    { countryID: 124, countryName: "Palestine" },
    { countryID: 131, countryName: "Panama" },
    { countryID: 100, countryName: "Papua New Guinea" },
    { countryID: 101, countryName: "Paraguay" },
    { countryID: 39, countryName: "Peru" },
    { countryID: 11, countryName: "Philippines" },
    { countryID: 32, countryName: "Poland" },
    { countryID: 78, countryName: "Portugal" },
    { countryID: 145, countryName: "Qatar" },
    { countryID: 122, countryName: "Republic of the Congo" },
    { countryID: 58, countryName: "Romania" },
    { countryID: 8, countryName: "Russia" },
    { countryID: 79, countryName: "Rwanda" },
    { countryID: 177, countryName: "Saint Lucia" },
    { countryID: 182, countryName: "Saint Vincent and the Grenadines" },
    { countryID: 176, countryName: "Samoa" },
    { countryID: 189, countryName: "San Marino" },
    { countryID: 42, countryName: "Saudi Arabia" },
    { countryID: 68, countryName: "Senegal" },
    { countryID: 99, countryName: "Serbia" },
    { countryID: 183, countryName: "Seychelles" },
    { countryID: 105, countryName: "Sierra Leone" },
    { countryID: 114, countryName: "Singapore" },
    { countryID: 112, countryName: "Slovakia" },
    { countryID: 142, countryName: "Slovenia" },
    { countryID: 166, countryName: "Solomon Islands" },
    { countryID: 83, countryName: "Somalia" },
    { countryID: 23, countryName: "South Africa" },
    { countryID: 24, countryName: "South Korea" },
    { countryID: 93, countryName: "South Sudan" },
    { countryID: 26, countryName: "Spain" },
    { countryID: 56, countryName: "Sri Lanka" },
    { countryID: 38, countryName: "Sudan" },
    { countryID: 164, countryName: "Suriname" },
    { countryID: 152, countryName: "Swaziland" },
    { countryID: 86, countryName: "Sweden" },
    { countryID: 95, countryName: "Switzerland" },
    { countryID: 52, countryName: "Syria" },
    { countryID: 50, countryName: "Taiwan" },
    { countryID: 97, countryName: "Tajikistan" },
    { countryID: 29, countryName: "Tanzania" },
    { countryID: 19, countryName: "Thailand" },
    { countryID: 154, countryName: "Timor-Leste" },
    { countryID: 106, countryName: "Togo" },
    { countryID: 180, countryName: "Tonga" },
    { countryID: 149, countryName: "Trinidad and Tobago" },
    { countryID: 77, countryName: "Tunisia" },
    { countryID: 17, countryName: "Turkey" },
    { countryID: 115, countryName: "Turkmenistan" },
    { countryID: 191, countryName: "Tuvalu" },
    { countryID: 35, countryName: "Uganda" },
    { countryID: 28, countryName: "Ukraine" },
    { countryID: 92, countryName: "United Arab Emirates" },
    { countryID: 21, countryName: "United Kingdom" },
    { countryID: 2, countryName: "United States" },
    { countryID: 132, countryName: "Uruguay" },
    { countryID: 41, countryName: "Uzbekistan" },
    { countryID: 175, countryName: "Vanuatu" },
    { countryID: 193, countryName: "Vatican City" },
    { countryID: 43, countryName: "Venezuela" },
    { countryID: 12, countryName: "Vietnam" },
    { countryID: 163, countryName: "Western Sahara" },
    { countryID: 47, countryName: "Yemen" },
    { countryID: 70, countryName: "Zambia" },
    { countryID: 71, countryName: "Zimbabwe" },
  ],
  taskPriorities: [
    {"taskPriorityID": 1, "taskPriorityName": "Urgent"},
    {"taskPriorityID": 2, "taskPriorityName": "Normal"},
    {"taskPriorityID": 3, "taskPriorityName": "Below Normal"},
    {"taskPriorityID": 4, "taskPriorityName": "Low"}
  ],
  taskStatuses: [
    { "taskStatusID": 1, "taskStatusName": "Holding" },
    { "taskStatusID": 2, "taskStatusName": "Prioritized" },
    { "taskStatusID": 3, "taskStatusName": "Started" },
    { "taskStatusID": 4, "taskStatusName": "Finished" },
    { "taskStatusID": 5, "taskStatusName": "Reverted"}
  ]
};

fs.writeFileSync(jsonfile, JSON.stringify(data), "utf8");

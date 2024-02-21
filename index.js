import express from "express";
import adodb from "node-adodb";

const app = express();
const accessConfig = {
  provider: "Microsoft.ACE.OLEDB.12.0",
  connectionString:
    "Provider=Microsoft.ACE.OLEDB.12.0;Data Source=D:\\path\\to\\your\\database.accdb",
};
const connection = adodb.open(accessConfig);

// Define the SQL query
const sqlQuery = "SELECT * FROM YourTableName";

// Execute the query
connection
  .query(sqlQuery)
  .then((data) => {
    console.log(data); // Output the retrieved data
  })
  .catch((error) => {
    console.error(error); // Output any errors
  });

app.listen(8000, (req, res, next) => console.log("server is running"));

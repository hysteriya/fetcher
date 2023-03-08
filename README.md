# fetcher
make a fetcher api for an internship project which fetches data from https://fakerapi.it/en
These codes are a Node.js application that fetches data from the Faker API and stores it in a MongoDB database. The application is composed of two files: script.js and fetch.html.

In script.js, the application is set up using several Node.js libraries: mongoose, express, body-parser, and node-fetch. The code creates an express app, sets up middleware for handling JSON and URL encoded data, and creates a server that listens on port 8080.

The application has two endpoints: a GET endpoint for serving the fetch.html file, and a POST endpoint for fetching data from the Faker API. When the user clicks the "Fetch Data" button in the HTML file, a POST request is sent to the server with the quantity and datatype of the data to be fetched. The server then sends a request to the Faker API using the specified quantity and datatype, and stores the resulting data in a MongoDB database. The fetched data is also sent back to the client as a response to the POST request.

The code also defines a schema and model for the data to be stored in the MongoDB database. The schema has two fields: an ID field and a name field. The name field is set dynamically based on the datatype of the fetched data.

The fetch.html file contains the HTML and JavaScript code for the client-side of the application. The HTML file contains a form with two fields: a quantity field and a datatype field. When the user clicks the "Fetch Data" button, the JavaScript code sends a POST request to the server with the values of the quantity and datatype fields. The fetched data is then displayed in an unordered list on the page.

Overall, the code fetches data from the Faker API, stores it in a MongoDB database, and displays it on a web page.

// Get the express package 
const express = require('express');
const mariadb = require('mariadb');

// Instantiate an express (web) app
const app = express();

// Define a port number for the app to listen on
const PORT = 3000;

// Configure the database connection
const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Izzaia8192',
    database: 'guestbook'
});

// Connect to the database
async function connect() {
    try {
        let conn = await pool.getConnection();
        console.log('Connected to the database');
        return conn;
    } catch (err) {
        console.log('Error connecting to the database: ' + err);
    }
}

// Tell the app to encode data into JSON format
app.use(express.urlencoded({ extended: false }));

// Tell the app to use the "public" folder to serve static files
app.use(express.static('public'));

// Set your view (templating) engine to "EJS"
// (We use a templating engine to create dynamic web pages)
app.set('view engine', 'ejs');

// Define a "default" route, 
// e.g. jshmo.greenriverdev.com/reservation-app/
app.get('/', (req, res) => {
    console.log("Hello, world - server!");

    // Return home page
    res.render('home');
});

app.get('/admin', async (req, res) => {

    const conn = await connect();
    const results = await conn.query ('SELECT * FROM guests ORDER BY timestamp DESC');

    res.render('admin', { guests : results})
})

// Define a "confirm" route, using the POST method
app.post('/thank-you', async (req, res) => {

    // Get the data from the form that was submitted
    // from the body of the request object
    const data = req.body;
    console.log(data);

    // Connect to the database
    const conn = await connect();
    
    // Insert the data into the database
    await conn.query(`INSERT INTO guests (firstName, lastName, jobTitle, company, linkedInUrl, email, howDidMeet, otherMeet, message, mailingList, mailingType) VALUES ('${data.fName}', '${data.lName}', '${data.job_title}', '${data.company}', '${data.linkedin_url}', '${data.email}', '${data.meet}', '${data.other}', '${data.message}', '${data.add_me}', '${data.method}')`);

    // Display the confirm page, pass the data
    res.render('thank-you', { details : data });
});

// Tell the app to listen for requests on the designated port
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});

const   express = require("express"),
        mongoose = require("mongoose"),
        path = require('path');

require('dotenv/config');


const app = express();


// Bodyparser Middleware
app.use(express.json());

// DB Config and connect
const db = (process.env.DATABASEURL);
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
    })
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(err));

// USE ROUTES
app.use("/api/items", require("./routes/api/items"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

// Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
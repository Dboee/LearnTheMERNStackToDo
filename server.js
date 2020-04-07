const   express = require("express"),
        mongoose = require("mongoose"),
        bodyParser = require('body-parser');

const items=require('./routes/api/items')



const app = express();


// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config and connect
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(err));

// USE ROUTES
app.use('/api/items', items);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
const express = require (`express`);
const cors = require (`cors`);
const bodyParser= require (`body-parser`);
const mongoose = require (`mongoose`);

//created server
const app = express();
console.log("hello world");
// use middlewares 

app.unsubscribe(cors());
app.use(bodyParser.json());

//
const userRouter = require("./router/user.route");

//mongodb url 

const dbURL = "mongodb+srv://Amisha:amisha011@cluster0.dujaf.mongodb.net/ResturantManagement?retryWrites=true&w=majority";
//connect with mongoose
mongoose.connect(dbURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
    .then(() => {
        console.log("Connected to MongoDb");


        app.listen(8001, () => {
            console.log("server is on port 8001")
        })

    })
    .catch(error => {
        console.log("error in coonecting with db", error)
    })

    app.use("/api/user",userRouter);

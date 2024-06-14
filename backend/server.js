const app = require("./app.js");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database.js");

// Handling Uncaught Exception
process.on("uncaughtException",(err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception.`);
    process.exit(1);
})

// Config

dotenv.config({path: "backend/config/config.env"});

// Connecting to databases
connectDatabase();

const server = app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
})

process.on("unhandledRejection",(err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to unhandled Promise Rejection.`);

    server.close(()=>{
        process.exit(1);
    })
})
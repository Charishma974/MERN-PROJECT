const app = require("./app");

const server = app.listen(3000,()=>{
    console.log(`Server Running on http://localhost:3000`);
})
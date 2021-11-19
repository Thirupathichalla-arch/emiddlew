const express = require("express");

const app = express();
let data = require("./MOCK_DATA.json");
app.use(express.json());

app.get("/", function (request, response) {
    response.send("Welcome to Home Page");
});

app.get("/data", function (request, response) {
    response.send(data);
});
app.get("/:email",(req,res)=>{
    const newData=data.filter((user)=>user.email==req.params.email);
    res.send(newData);

});
app.post("/",(req,res)=>{
    const newUser=[...data,req.body];

    res.send(newUser);
});
app.patch("/:email",(req,res)=>{
    const newData=data.map((data)=>{
        if(req.params.email===data.email){
            return req.body;
        }
        return data;
    });
    res.send(newData);
});
app.delete("/:email",(req,res)=>{
    const newData=data.filter((data)=>data.email!==req.params.email);
    res.send(newData);
})

app.listen(245,function(){
    console.log("listening on port 245");
});

const express = require("express");
require("./db/conn");
const Student = require("./models/students");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

// app.post("/students", (req, res) => {
    
//     console.log(req.body);
//     const user = new Student(req.body);
//     user.save().then(() => {
//         res.status(201).send(user);
//     }).catch((e)=> {
//         res.status(400).send(e);
//     })

//     // res.send("Data sent successfully");
// })
app.post("/students", async(req,res) => {
    try{
        const user = new Student(req.body);
        const createUser = await user.save();
        // res.status(201).send(createUser);
        res.send("Data sent successfully");
    }
    catch(e){
        res.status(400).send(e);
    }
    
    
})



//read user datas
app.get("/students", async(req, res) => {
    try{
const studentsData = await Student.find();
res.send(studentsData);
    }catch(e){
res.send(e);
    }
})

app.listen(port, () => {
    console.log(`connection established at port: ${port}`);
})

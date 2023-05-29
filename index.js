const express = require('express');
const dbConnect = require('./mongoDB');
const app = express();

app.use(express.json());

app.get('/',async (req,resp)=>{
    const db = await dbConnect();
    const data = await db.find({}).toArray();
    resp.send(data)
})

app.post('/',async(req,resp)=>{
    const db = await dbConnect();
    const data = await db.insertOne(req.body);
    resp.send(data);
})

app.put('/:name',async(req,resp)=>{
    const db = await dbConnect();
    const data = await db.updateOne({name:req.params.name},{
        $set:req.body
    });
    resp.send(data);
})

app.listen(4500);

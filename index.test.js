
const dbconnect=require('./mongoDB');

test("testing for dbconnect function",async()=>{
    const collection=await dbconnect();
    const data=await collection.find({}).toArray();
    expect(data).not.toBe(null);
    expect(Array.isArray(data)).toBe(true);
})
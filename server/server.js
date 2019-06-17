const express=require("express");
const api_v1_router=require('./routes');
const app=express();
app.use(express.json());
app.use('/api/v1',api_v1_router);
app.listen(process.env.PORT ||'3000',()=>{
    console.log('server is running on port 3000');
});
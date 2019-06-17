const express=require('express');
const db=require('../db/index.js');
const router=express.Router();

router.get('/user_info',(req,res,next)=>{
    try{
        db.executeQuery('select id, username from user', results=>res.json(results));
    }catch(e){
        console.log('Manish Chaava',e);
        res.sendStatus(500);
    }
});

router.get('/user_info/:uid',(req,res,next)=>{
    try{

        db.executeQuery(`select id, username from user where id=${req.params.uid}`, results=>res.json(results[0]));
    }catch(e){
        console.log('Manish Chaava',e);
        res.sendStatus(500);
    }
});

module.exports=router;
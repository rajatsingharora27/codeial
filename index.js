const express=require('express');
const app=express();
const port=8000;



app.listen(post,(err)=>{
    if(err){
        throw new Error(`did NOT connect to port`);
    }
    else{
        console.log(`connected to the post ${port}`);
    }
})
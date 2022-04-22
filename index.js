const express =require('express');
const app=express();
const port=8000;


app.listen(port,(err)=>{
    if(err){
        throw new Error(`Connection NOT establised to port ${port}`)
    }
    else{
        console.log(`Connection establised to port ${port}`)
    }
})




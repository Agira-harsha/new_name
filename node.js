const express=require('express')


const app=express();
let fs=require('fs')


fs.readFile('topic.txt',(err,data)=>{
    if(err)
    {
        console.log("file not found")
    }else{
        console.log(data.toString());
    }


})

fs.writeFile('topic.txt',"hellleeeeeeeeeee Hasha boy talent person in the world ",(err,data)=>{
    if(err){
        console.log("Nothing");
    }else{
        console.log("yes writtennnn");
    }
})



fs.unlink('topic1.txt',(err)=>{
    if(err)
    {
        console.log("file not found")
    }
    else{
        console.log("deleted success")
    }
})



app.listen(2002,()=>{
    console.log("yes I'm working ");
})
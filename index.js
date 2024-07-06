const express= require('express')
const cors= require('cors');
const app = express()
app.use(cors())
app.get('/user',function(req,res){
    res.json('hello world')
})
app.post('/calculate',function (req,res){
    let num1 =req.body.num1;
    let num2 =req.body.num2;
    let operator= req.body.operator;
    let result=0;
});
app.listen(2000,function(){
    console.log('serverlistening on port 2000');
})

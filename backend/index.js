import express from 'express';
const app = express();

app.listen(3000,()=>console.log('server runnin go on port 3000'))

app.get('/',(req,res)=>{
    console.log('Request received');
    res.send('hi')
})
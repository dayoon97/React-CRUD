const express = require('express');
const app = express();
// const cors = require('cors');
const bodyParser = require('body-parser');
const port =process.env.PORT || 3001;
const router = require('./routes/index');

// app.use(cors());

app.use(bodyParser.json());
app.use('/api', router); // app.use('/api', (req, res)=> res.json({username:'bryan'}));
app.use('/modify', router);

app.use(function(err, req, res, next){
    res.render('error', {
        message: '요청하신 페이지를 찾을 수 없습니다.',
        code: '404'
    })
});

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})


console.log(router);
app.get('/api', router); 
app.put('/modify', router);



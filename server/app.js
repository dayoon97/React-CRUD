const express = require('express');
const app = express();
// const cors = require('cors');
const bodyParser = require('body-parser');
const port =process.env.PORT || 3001;
const indexRouter = require('./routes/index');
const userRouter = require('./routes/users');
// app.use(cors());

app.use(bodyParser.json());
app.use('/api', indexRouter); // app.use('/api', (req, res)=> res.json({username:'bryan'}));
app.use('/api', userRouter);

app.use(function(err, req, res, next){
    res.render('error', {
        message: '요청하신 페이지를 찾을 수 없습니다.',
        code: '404'
    })
    console.log(req.url);
});

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})




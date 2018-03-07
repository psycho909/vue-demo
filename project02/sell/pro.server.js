var express=require('express');
var port=8088;

var app=express();
var router=express.Router();

router.get('/',function(req,res,next){
    req.url="/index.html";
    next()
})

app.use(router)

// 街口數據
var goods=require('./data/01-商品页(点菜).json');
var ratings=require('./data/02-商品页(评价).json');
var seller=require('./data/03-商品页(商家).json');
var routes=express.Router();
router.get('/api/goods',(req,res)=>{
    res.json(goods)
})

router.get('/api/ratings',(req,res)=>{
    res.json(ratings)
})

router.get('/api/seller',(req,res)=>{
    res.json(seller)
})
//app.use('/api',routes)

// 定義static目錄
app.use(express.static('./dist'))

// 啟動express
module.express=app.listen(port,function(err){
    if(err){
        console.log(err)
        return;
    }
    console.log('http://localhost:'+port+'\n')
})
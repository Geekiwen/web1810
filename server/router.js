var express = require("express");
var router = express.Router();
var url = require("url");
var homehot1 = require("./data/home/homehot1.js");
var homehot2 = require("./data/home/homehot2.js");
var searchData = require("./data/search/index.js");
var details = require("./data/detail/index.js");
var commentData= require("./data/comment/index.js");
var orderData = require("./data/order/index.js");


// 接口
// 首页的商品：hot1
router.get("/homehot", function (req, res) {
    // 接受一个参数
    var city = url.parse(req.url, true).query.city;
    console.log(city);
    res.send(homehot1);
})
// 首页的商品：hot2
router.get("/homehot2", function (req, res) {
    // 接受一个参数
    var city = url.parse(req.url, true).query.city;
    console.log(city);
    res.send(homehot2);
})

// 搜索页面
router.get("/search", function (req, res) {
    // 城市
    // 搜索关键字
    // page
    var city = url.parse(req.url, true).query.city;
    var keyword = url.parse(req.url, true).query.keyword;
    var page = url.parse(req.url, true).query.page;
    console.log("city=" + city + ",keyword=" + keyword + ",page=" + page);
    res.send(searchData)
})

// 详情页
router.get("/detail", function (req, res) {
    // id
    var id = url.parse(req.url, true).query.id;
    console.log("产品id：" + id);
    res.send(details);
})

// 评论数据
router.get("/comment", function (req, res) {
    // id
    var id = url.parse(req.url, true).query.id;
    console.log("产品id：" + id);
    res.send(commentData);
})

// 购买接口
router.post("/buygoods",function(req,res){
    var id = req.body.id;
    if(id){
        res.send({
            msg:'商品订单正在出库，请货到付款',
            id:id
        })
    }else{
        res.send({
            msg:'所选商品有问题，请重新下单'
        })
    }
})

// 购物车
router.get("/shopcar",function(req,res){
    var user = url.parse(req.url, true).query.user;
    console.log(user);
    res.send(orderData);
})

// 评价提交
router.post("/comment",function(req,res){
    var commentData = req.body.comment;
    console.log(commentData);
    res.send({
        msg:'评价成功'
    })
})

module.exports = router;
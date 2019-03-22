import React from "react"

export default class LoadMore extends React.Component {

    /* 
        1.判断触底
            添加滚动事件
            获取滚动高度
    
    */

    componentDidMount() {
        // 获取元素
        const wrapper = this.refs.wrapper;
        // 获取滚动高度
        // var scrollHeight = document.documentElement.scrollTop;
        // console.log(scrollHeight);
        // 获取相对视口高度
        // 获得视口的高度
        let winHeight = document.documentElement.clientHeight;
        // 声明一个定时器timer
        var timer = null;
        var _this = this;
        function callback() {
            let top = wrapper.getBoundingClientRect().top;
            if (top <= winHeight) {
                // 再次请求数据
                _this.props.onCostomEvent();
            }
        }

        window.addEventListener("scroll", function (event) {
            if(timer){
                clearTimeout(timer);
            }
            timer = setTimeout(function(){
                callback();
            },300)

        })
    }

    render() {
        return (
            <div className="load-more" ref="wrapper">
                数据加载中...
            </div>
        )
    }
}
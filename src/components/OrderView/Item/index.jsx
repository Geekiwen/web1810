import React from 'react'
import './style.less'
import { getCommentData } from "../../../fetch/order"

export default class Item extends React.Component {


    /* 
        commentState
            0:未评价
            1:评价中
            2:已评价
    */

    constructor(){
        super();
        this.state = {
            commentState:0
        }
    }

    // 通过生命周期函数赋值状态
    componentDidMount(){
        const data = this.props.data;
        console.log(data);
        this.setState({
            commentState:data.commentState
        })
    }

    commentHandler() {
        // 评价
        this.setState({
            commentState:1
        })
    }


    // 提交评价
    submitCommentHandler(){
        this.setState({
            commentState:2
        })

        var comment = this.refs.commentText.value;
        // 评价接口
        var result = getCommentData(comment);
        result.then(res => res.json())
        .then(data => {
            alert(data.msg)
        })
    }

    // 取消评价
    hideComment(){
        this.setState({
            commentState:0
        })
    }

    render() {
        const data = this.props.data;
        return (
            <div className="clear-fix order-item-container">
                <div className="order-item-img float-left">
                    <img src={data.img} />
                </div>
                <div className="order-item-comment float-right">
                    {
                        this.state.commentState === 0 ?
                            <button className="btn" onClick={this.commentHandler.bind(this)}>评价</button>
                            :
                            <button className="btn unseleted-btn">已评价</button>
                    }
                </div>
                <div className="order-item-content">
                    <span>商户：{data.title}</span>
                    <span>类型：{data.houseType}</span>
                    <span>价格：￥{data.price}</span>
                </div>

                {/* 评价框 */}
                {
                    this.state.commentState === 1 ?
                        <div className="comment-text-container">
                            <textarea style={{ width: '100%', height: '80px' }} className="comment-text" ref="commentText"></textarea>
                            <button className="btn" onClick={this.submitCommentHandler.bind(this)}>提交</button>
                            &nbsp;
                        <button className="btn unseleted-btn" onClick={this.hideComment.bind(this)}>取消</button>
                        </div>
                        : ""
                }

            </div>
        )
    }
}

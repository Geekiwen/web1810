import React from "react"
import { getDetailsData } from "../../../fetch/detail"
import DetailsView from "../../../components/DetailsView"


export default class DetailsInfo extends React.Component {

    constructor() {
        super();
        this.state = {
            detailsData: {}
        }
    }

    componentDidMount() {
        const id = this.props.id;
        // 网络请求
        var result = getDetailsData(id);
        result.then(res => res.json())
            .then(data => {
                this.setState({
                    detailsData: data
                })
            })
    }

    // 业务逻辑
    changeLoginHandler() {
        // 接受uname
        if (this.props.username) {
            // 登陆了
            // 订单信息：
            // 给后台发送订单：用户所选择的信息:相当于一个post请求：参数就是订单信息
            console.log("订单已经成功");
            // 跳转到订单详情页
            //  todo

        } else {
            // 未登录 -> 跳转到登录页
            // 增加一个当前页面的参数
            // this.props.history.push("/login/"+ encodeURIComponent('detail/'+ this.props.id))
            this.props.history.push("/login")
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.detailsData.imgs ?
                        <DetailsView
                            history={ this.props.history }
                            data={this.state.detailsData}
                            id={this.props.id}
                            onChangeLogin={this.changeLoginHandler.bind(this)}
                        /> :
                        <div>正在请求...</div>
                }
            </div>
        )
    }
}
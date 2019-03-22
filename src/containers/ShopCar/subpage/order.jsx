import React from "react"
import { getOrderData } from "../../../fetch/order"
import OrderView from "../../../components/OrderView"

export default class Order extends React.Component{

    constructor(){
        super();
        this.state = {
            orderData:[]
        }
    }


    componentDidMount(){
        // 获取参数
        const user = this.props.username;
        const result = getOrderData(user);
        result.then(res => res.json())
        .then(data => {
            this.setState({
                orderData:data
            })
        })

    }

    render(){
        return(
            <div>
                {
                    this.state.orderData.length > 0 ?
                    <OrderView data={ this.state.orderData }/> :
                    <div>正在请求数据...</div>
                }
            </div>
        )
    }
}
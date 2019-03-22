import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import UserInfo from "../../components/UserInfo"
import CarHeader from "../../components/Header"
import Order from "./subpage/order"

class ShopCar extends React.Component {

    // 必须登陆之后
    componentDidMount(){
        //判断是否登陆
        if(this.props.userinfo.uname){
            // 允许打开
            
        }else{
            this.props.history.push("/login")
        }
    }

    render() {
        return (
            <div>
                <CarHeader title="购物车" />
                <UserInfo username={ this.props.userinfo.uname } city={ this.props.city.cityName }/>
                <Order username={ this.props.userinfo.uname }/>
            </div>
        )
    }
}


function mapStateToProps(state){
    return{
        userinfo:state.userinfo,
        city:state.city
    }
}

export default withRouter(connect(
    mapStateToProps
)(ShopCar))
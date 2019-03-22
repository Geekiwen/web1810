import React from "react"
import { connect } from "react-redux"
import { bindActionCreators }  from "redux"
import * as ActionsCity from "../actions/city"
import { withRouter } from "react-router-dom"

class Layout extends React.Component {

    // 初始化写入城市
    componentDidMount(){
        this.props.ActionsCity.setCity({
            cityName:"上海"
        })
    }
    
    render() {
        return (
            <div>
                { this.props.children }
            </div>
        )
    }
}

// 读写
function mapStateToProps(state){
    return{
        city:state.city
    }
}

function mapDispatchToProps(dispatch){
    return{
        ActionsCity:bindActionCreators(ActionsCity,dispatch)
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Layout))
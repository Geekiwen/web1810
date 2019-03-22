import React from "react"
import CityHeader from "../../components/Header"
import CurrentCity from "../../components/CurrentCity"
import HotCityList from "../../components/HotCityList"
import { connect } from "react-redux"
import { bindActionCreators }  from "redux"
import * as ActionsCity from "../../actions/city"
import { withRouter } from "react-router-dom"

class City extends React.Component{

    // 城市存储
    constomCityHandler(data){
        this.props.ActionsCity.updateCity({
            cityName:data
        })
        // 返回到上一个页面
        this.props.history.replace("/")
    }

    render(){
        return(
            <div>
                <CityHeader title="城市选择" history={ this.props.history }/>
                <CurrentCity city={ this.props.city.cityName }/>
                <HotCityList costomCityEvent={ this.constomCityHandler.bind(this) }/>
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
)(City))
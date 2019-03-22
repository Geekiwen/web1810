import React from "react"
import BottomNav from "../../components/BottomNav"
import TopNav from "../../components/TopNav"
import SwiperView from "../../components/SwiperView"
import Banner1 from "../../static/images/banner1.png"
import Banner2 from "../../static/images/banner2.png"
import Banner3 from "../../static/images/banner3.png"

import HomeHot from "./subpage/homehot"
import { connect } from "react-redux"

class Home extends React.Component {
    render() {
        return (
            <div>
                <TopNav city={ this.props.city.cityName } history={ this.props.history }/>
                <SwiperView banners={[Banner1,Banner2,Banner3]}/>
                <HomeHot city={ this.props.city.cityName } />
                <BottomNav />
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        city:state.city
    }
}

export default connect(
    mapStateToProps
)(Home)
import React from "react"
// import { httpGet } from "../../../utils/http"
import { HomeHotData, HomeHotData2 } from "../../../fetch/home"
import HomeHotView from "../../../components/HomeHotView"

export default class HomeHot extends React.Component {

    constructor() {
        super();
        this.state = {
            homehotData: [],
            homehotData2:[]
        }
    }

    componentDidMount() {
        const city = this.props.city || "上海";
        var result = HomeHotData(city);
        result.then(res => res.json())
            .then(data => {
                this.setState({
                    homehotData: data
                })
            })

        var result2 = HomeHotData2(city);
        result2.then(res => res.json())
            .then(data => {
                this.setState({
                    homehotData2: data
                })
            })
    }

    render() {
        return (
            <div>
                {
                    this.state.homehotData.length > 0 ?
                        <HomeHotView data={this.state.homehotData} title="热销单品" /> :
                        <div>正在加载数据...</div>
                }
                
                {
                    this.state.homehotData2.length > 0 ?
                        <HomeHotView data={this.state.homehotData2} title="家庭常用" /> :
                        <div>正在加载数据...</div>
                }

            </div>
        )
    }
}
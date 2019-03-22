import React from "react"
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import "./style.less"
import Pagination from "./Pagination"
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default class SwiperView extends React.Component {

    constructor(){
        super()
        this.state = {
            currentIndex:0
        }
    }

    handleChangeIndex(index){
        this.setState({
            currentIndex:index
        })
    }

    render() {

        const banners = this.props.banners;

        return (
            <div className="swiper">
                <AutoPlaySwipeableViews onChangeIndex={this.handleChangeIndex.bind(this)}>
                    {
                        banners.map((element,index) => {
                            return (
                                <div className="swiper-view" key={index}>
                                    <img src={element} alt=""/>
                                </div>
                            )
                        })
                    }
                </AutoPlaySwipeableViews>
                <Pagination index={ this.state.currentIndex } dots={banners} />
            </div>
        )
    }
}
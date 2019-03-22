import React from "react"
import "./style.less"

export default class StoreBuyView extends React.Component {

    collectHandler(event) {
        this.props.onStoreEvent();
    }

    buyHandler(event){
        this.props.onBuyEvent();
    }

    render() {
        const currentCollect = this.props.currentCollect;
        return (
            <div className="buy-store-container clear-fix">
                <div className="item-container float-left">
                    {
                        currentCollect ?
                            <button onClick={this.collectHandler.bind(this)} className="selected o">已收藏</button>
                            :
                            <button onClick={this.collectHandler.bind(this)} className="selected">收藏</button>
                    }
                </div>
                <div className="item-container float-right">
                    <button onClick={ this.buyHandler.bind(this) }>购买</button>
                </div>
            </div>
        )
    }
}
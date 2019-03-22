import React from "react"
import StoreBuyView from "../../../components/StoreBuyView"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as collectActions from "../../../actions/collect"
import { getBuyData } from "../../../fetch/buy"

class StoreBuy extends React.Component {

    constructor() {
        super();
        this.state = {
            currentCollect: false
        }
    }

    componentDidMount() {
        // 判断是否收藏
        this.setState({
            currentCollect: this.isCollected()
        })
    }

    collectHandler() {
        // 收藏功能
        // 读到id
        if (this.isLogined()) {
            // 判断是否收藏
            if (this.isCollected()) {
                // 取消收藏
                this.props.collectActions.cancelCollect({
                    id: this.props.id
                })
                this.setState({
                    currentCollect: false
                })
            } else {
                // 收藏
                this.props.collectActions.setCollect({
                    id: this.props.id
                })
                this.setState({
                    currentCollect: true
                })
            }
        } else {
            // 去登陆
            this.props.history.push("/login")
        }

    }


    // 判断登陆
    isLogined() {
        if (!this.props.userinfo.uname) {
            return false;
        }
        return true;
    }

    // 判断是否收藏
    isCollected() {
        const id = this.props.id;
        const collects = this.props.collect;
        // some
        return collects.some((element) => {
            return element.id === id;
        })
    }

    // 购买
    buyHandler() {
        if (this.isLogined()) {
            // 给后台发送数据:订单信息
            /**
             * 发送订单的id
             */
            getBuyData(this.props.id)
            .then(res => res.json())
            .then(data => {
                alert(data.msg)
            })
            

        } else {
            this.props.history.push("/login")
        }
    }


    render() {
        return (
            <div>
                <StoreBuyView
                    currentCollect={this.state.currentCollect}
                    onBuyEvent={this.buyHandler.bind(this)}
                    onStoreEvent={this.collectHandler.bind(this)}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        collect: state.collect,
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        collectActions: bindActionCreators(collectActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StoreBuy)

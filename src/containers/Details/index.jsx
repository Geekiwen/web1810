import React from "react"
import DetailsHeader from "../../components/Header"
import DetailsInfo from "./subpage/DetailsInfo"
import { connect } from  "react-redux"

class Details extends React.Component{
    render(){
        return(
            <div>
                <DetailsHeader title="详情页" history={ this.props.history }/>
                <DetailsInfo history={ this.props.history } id={ this.props.match.params.id } username={ this.props.userinfo.uname }/>
            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        userinfo:state.userinfo
    }
}

export default connect(
    mapStateToProps
)(Details)
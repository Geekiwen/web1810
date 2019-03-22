import React from "react"
import LoginView from "../../components/LoginView"
import { connect } from "react-redux"
import * as actionsUserinfo from "../../actions/userinfo"
import { bindActionCreators } from "redux"


class Login extends React.Component{
    
    getLoginHandler(username){
        // 存储信息
        this.props.actionsUserinfo.login({
            uname:username
        })
        
        // 返回去
        window.history.back();
        
        // 接受参数
        // var path = this.props.match.params.router;
        // if(path){
        //     this.props.history.push(decodeURIComponent(path));
        // }
    }

    render(){
        return(
            <div>
                <LoginView onLoginEvent={ this.getLoginHandler.bind(this) }/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        userinfo:state.userinfo
    }
}


function mapDispatchToProps(dispatch){
    return{
        actionsUserinfo:bindActionCreators(actionsUserinfo,dispatch)
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
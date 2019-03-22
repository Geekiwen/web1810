import React from "react"
import "./style.less"

export default class Header extends React.Component {

    backHandler(event){
        window.history.back();
        // this.props.history.push("/")
        // this.props.history.replace("/");
    }

    render(){
        return(
            <div id="common-header">
                <span className="back-icon" onClick={ this.backHandler.bind(this) }>
                    <i className="icon-chevron-left"></i>
                </span>
                <h1>{ this.props.title }</h1>
            </div>
        )
    }
}
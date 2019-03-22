import React from "react"
import { Link } from "react-router-dom"
import SearchInput from "../SearchInput"
import "./style.less"

export default class TopNav extends React.Component{
    render(){
        return(
            <div id="home-header" className="clear-fix">
                <div className="home-header-left float-left">
                    <Link to="/city">
                        <span>{ this.props.city }</span>
                    </Link>
                    <i className="icon-angle-down"></i>
                </div>
                <div className="home-header-right float-right">
                    <Link to="/shopcar">
                        <i className="iconfont icon-car"></i>
                    </Link>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <SearchInput history={ this.props.history }/>
                    </div>
                </div>
            </div>
        )
    }
}
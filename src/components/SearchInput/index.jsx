import React from "react"
import "./style.less"

export default class SearchInput extends React.Component{
    
    constructor(){
        super();
        this.state = {
            values:""
        }
    }

    onKeyUpHandler(event){
        // 跳转到search页面
        // 监听回车事件
        if(event.keyCode === 13){
            this.props.history.push("/search/"+this.state.values);
        }
    }

    getValuesHandler(event){
        this.setState({
            values:event.target.value
        })
    }

    render(){
        return(
            <input 
                className="search-input" 
                type="text" 
                value={ this.state.values }
                onKeyUp={ this.onKeyUpHandler.bind(this) }
                onChange={ this.getValuesHandler.bind(this) }
                ></input>
        )
    }
}
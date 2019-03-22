import React from "react"
import { getCommentData } from "../../../fetch/comment"
import CommentView from "../../../components/CommentView"

export default class CommentInfo extends React.Component{

    constructor(){
        super();
        this.state = {
            commentData:{}
        }
    }

    componentWillMount(){
        var id = this.props.id;
        var result = getCommentData(id);
        result.then(res => res.json())
        .then(data => {
            this.setState({
                commentData:data
            })
        })
    }

    render(){
        return(
            <div>
                {
                    this.state.commentData.data ?
                    <CommentView data={ this.state.commentData.data }/> :
                    <div>正在加载数据...</div>
                }
            </div>
        )
    }
}
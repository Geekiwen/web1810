import React from "react"
import { Link } from "react-router-dom"
import "./style.less"

export default class Item extends React.Component {
    render() {
        var item = this.props.data;
        return (
            <div className="list-item">
                <Link to={`/detail/${item.id}`}>
                    <img src={item.img} alt="" />
                    <div className="mask">
                        <div className="left">
                            <p>{item.title}</p>
                            <p>{item.houseType}</p>
                        </div>
                        <div className="right">
                            <div className="btn">
                                {item.rentType}
                            </div>
                            {/*  后台经常传递给前端的是一个HTML结构  使用此属性，标签必须是自闭合  */}
                            <p dangerouslySetInnerHTML={{ __html: item.price + "/月" }} />
                            {/* <p dangerouslySetInnerHTML={{ __html }} /> */}
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}
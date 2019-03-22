import React from 'react';
import "./style.less"

export default class Pagination extends React.Component {
    render() {
        // 获取一个参数，参数意义：图片数量
        const dots = this.props.dots
        return(
            <div className="swiper-pagination">
                <ul>
                    {
                        dots.map((element,index) => {
                            return <li className={ index === this.props.index ? 'selected' :'' } key={index}></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
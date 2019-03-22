import React from "react"
import "./style.less"

export default class Tabs extends React.Component {


    /**
     * tab切换:tab的效果和标签的结构
     *  渲染结构：
     *  <div>
     *     <div>标题1</div>
     *     <div>标题2</div>
     *  </div>
     *  <div>
     *     <div>内容1</div>
     *     <div>内容2</div>
     *  </div>
     * 
     * 
     *  编码结构：
     *  <tabs>
     *      <div tabName={ 标题1 }>
     *         <div>内容1</div>
     *      </div>
     *      <div tabName={ 标题2 }>
     *         <div>内容2</div>
     *      </div>
     *  </tabs>
     * 
     */

    constructor(){
        super();
        this.state = {
            currentIndex:0
        }
    }

    // 控制内容部分的显示与隐藏
    check_item_index(index){
        // index：所要显示的index
        // currentIndex：切换index
        return index === this.state.currentIndex ?  "show" : "Tab_item"
    }

    // 点击切换tab事件
    changeTabsHandler(index){
        this.setState({
            currentIndex:index
        })
    }

    // 处理高亮样式
    check_item_active(index){
        return index === this.state.currentIndex ? "Tab_title active" : 'Tab_title' 
    }

    render() {
        const  _this = this;
        return (
            <div>
                {/*  标题部分  */}
                <div className="Tab_title_wrap">
                    {
                        React.Children.map(this.props.children, function (element, index) {
                            return (
                                <div className={ _this.check_item_active(index) } onClick={ _this.changeTabsHandler.bind(_this,index) }>
                                    {element.props.tabName}
                                </div>
                            )
                        })
                    }
                </div>
                {/* 内容部分 */}
                <div className="Tab_item_wrap">
                    {
                        React.Children.map(this.props.children, function (element, index) {
                            return (
                                <div className={ _this.check_item_index(index) }>
                                    { element.props.children }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
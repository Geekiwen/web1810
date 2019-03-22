import React from "react"
import { getSeachListData } from "../../../fetch/search"
import SearchListView from "../../../components/SearchListView"
import LoadMore from "../../../components/LoadMore"

export default class SearchList extends React.Component {

    constructor() {
        super();
        this.state = {
            searchData: [],
            page: 0,
            hasMore: false
        }
    }

    componentDidMount() {
        const city = this.props.city || 'shanghai'
        const keyword = this.props.keyword || 'default';
        this.http(city, keyword, 0);
    }

    componentDidUpdate(prevProps, prevState) {
        const city = this.props.city || 'shanghai'
        const keyword = this.props.keyword || 'default';
        // 如果上一次的props和这一次props相同，说明两次搜索的内容一样，就不再次请求
        if (prevProps.keyword !== keyword) {
            this.http(city, keyword, 0);
        }
    }

    http(city, keyword, page) {
        getSeachListData(city, keyword, page)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    // 合并数据
                    searchData: this.state.searchData.concat(data.data),
                    page: this.state.page += 1,
                    hasMore: data.hasMore
                })
            })
    }

    loadMoreHandler() {
        const city = this.props.city || 'shanghai'
        const keyword = this.props.keyword || 'default';
        const page = this.state.page;
        // 再次请求数据
        this.http(city, keyword, page);
    }

    // 解决state状态问题
    componentWillUnmount() {
        this.setState = (state, callback) => {
            return;
        };
    }

    render() {
        return (
            <div>
                {
                    this.state.searchData.length > 0 ?
                        <SearchListView data={this.state.searchData} /> :
                        <div>等待数据加载...</div>
                }
                {
                    this.state.hasMore ?
                        <LoadMore onCostomEvent={this.loadMoreHandler.bind(this)} />
                        : <div>被你看光了!!!</div>
                }
            </div>
        )
    }
}
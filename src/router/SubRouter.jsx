import React from "react"
import { Route,Switch } from "react-router-dom"

import Home from "../containers/Home"
import LifeService from "../containers/LifeService"
import Mine from "../containers/Mine"
import Shop from "../containers/Shop"
import City from "../containers/City"
import Search from "../containers/Search"
import Details from "../containers/Details"
import Login from "../containers/Login"
import ShopCar from "../containers/ShopCar"

import NotFound from "../containers/NotFound"

export default class AppRouter extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={ Home }></Route>
                <Route path="/life" component={ LifeService }></Route>
                <Route path="/shop" component={ Shop }></Route>
                <Route path="/mine" component={ Mine }></Route>
                <Route path="/city" component={ City }></Route>
                <Route path="/login/:router?" component={ Login }></Route>
                <Route path="/detail/:id" component={ Details }></Route>
                <Route path="/search/:keyword" component={ Search }></Route>
                <Route path="/shopcar" component={ ShopCar }></Route>
                <Route path="*" component={ NotFound }></Route>
            </Switch>
        )
    }
}
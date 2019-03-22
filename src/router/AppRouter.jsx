import React from "react"
import { HashRouter } from "react-router-dom"
import Layout from "../containers/layout"
import SubRouter from "./SubRouter"

export default class AppRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <Layout>
                    <SubRouter />
                </Layout>
            </HashRouter>
        )
    }
}
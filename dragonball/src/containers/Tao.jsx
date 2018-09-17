import React, {Component} from 'react'
import {List} from 'antd'
import { transaction, dragonBallContract } from '../dragonball'
import nervos from '../nervos'

export default class Tao extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        // dragonBallContract.methods.ballOrderLength(1).
    }

    renderItem = (item) => {
        return (
            <List.Item>
                <List.Item.Meta/>
                <div>content</div>
            </List.Item>
        )
    }

    loadMore = () => {

    }

    render () {
        const {data} = this.state
        return (
            <div>
                <List
                    className="demo-loadmore-list"
                    loading={loading}
                    itemLayout="horizontal"
                    loadMore={this.loadMore}
                    dataSource={data}
                    renderItem = {this.renderItem()}
                />
            </div>
        )
    }
}

import React, { Component } from 'react'
import { Row, Col, Avatar, Badge } from 'antd'
import long from '../public/images/long.svg'
import ball1 from '../public/images/cai_long_zhu1.png'
import ball2 from '../public/images/cai_long_zhu2.png'
import ball3 from '../public/images/cai_long_zhu3.png'
import ball4 from '../public/images/cai_long_zhu4.png'
import ball5 from '../public/images/cai_long_zhu5.png'
import ball6 from '../public/images/cai_long_zhu6.png'
import ball7 from '../public/images/cai_long_zhu7.png'

import { GridGenerator, HexGrid, Layout, Path, Hexagon, Text, Pattern, Hex } from 'react-hexgrid'
// import './dragonBall.css'
import 'antd/dist/antd.css'
import { transaction, dragonBallContract } from '../contracts/dragonball'
import nervos from '../config/nervos'

const Ball = (props) => {
  const { amount, ball } = props
  return (
    <Badge count={amount}>
      <Avatar shape="circle" size={56} src={ball} />
    </Badge>
  )
}

export default class DragonBall extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      amount1: 0,
      amount2: 0,
      amount3: 0,
      amount4: 0,
      amount5: 0,
      amount6: 0,
      amount7: 0,
    }
  }
  componentDidMount() {
    dragonBallContract.methods
      .playerId(window.neuron.getAccount())
      .call()
      .then((id) => {
        for (let i = 0; i < 7; i++) {
          const n = i + 1
          const key = `amount${n}`
          dragonBallContract.methods
            .players_(id, n)
            .call()
            .then((res) => {
              this.setState({
                [key]: Number(res),
              })
            })
        }
      })
  }

  render() {
    const { amount1, amount2, amount3, amount4, amount5, amount6, amount7 } = this.state
    return (
      <div style={{ textAlign: 'center', paddingTop: 32 }}>
        <Row gutter={8} style={{ paddingBottom: 8 }}>
          <Col xs={{ span: 6, push: 6 }} style={{ height: 56 }}>
            <Ball amount={amount1} ball={ball1} />
          </Col>
          <Col xs={{ span: 6, push: 6 }}>
            <Ball amount={amount2} ball={ball2} />
          </Col>
        </Row>
        <Row style={{ paddingBottom: 8 }}>
          <Col xs={{ span: 6, push: 3 }}>
            <Ball amount={amount6} ball={ball6} />
          </Col>
          <Col xs={{ span: 6, push: 3 }}>
            <Ball amount={amount7} ball={ball7} />
          </Col>
          <Col xs={{ span: 6, push: 3 }}>
            <Ball amount={amount3} ball={ball3} />
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 6, push: 6 }}>
            <Ball amount={amount5} ball={ball5} />
          </Col>
          <Col xs={{ span: 6, push: 6 }}>
            <Ball amount={amount4} ball={ball4} />
          </Col>
        </Row>
      </div>
    )
  }
}

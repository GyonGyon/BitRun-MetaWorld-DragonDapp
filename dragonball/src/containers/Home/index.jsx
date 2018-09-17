import React, { Component } from 'react'
import BottomNav from '../../components/BottomNav'
import DragonBall from '../../components/DragonBall'
import { Button, Row, Col, Avatar, Badge } from 'antd'
import './home.css'
import { Link } from 'react-router-dom'
import background from '../../public/images/di_tu.png'
import { transaction, dragonBallContract } from '../../contracts/dragonball'
import { address } from '../../contracts/dragonballCompiled'
import nervos from '../../config/nervos'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0, countDown: 0, balance: 0 }
  }

  componentDidMount() {

    dragonBallContract.methods
      .roundWinnerNumber()
      .call()
      .then((count) => {
        this.setState({ count: count })
      })

    // dra
    nervos.appchain.getBalance(address).then((balance) => {
      this.setState({ balance: balance })
    })
    // d
  }

  haveDragon = () => {
    nervos.appchain.getBlockNumber().then((current) => {
      const tx = {
        ...transaction,
        from: window.neuron.getAccount(),
        privateKey: window.neuron.getPrivateKey(),
        validUntilBlock: +current + 88,
      }
      return dragonBallContract.methods
        .iHaveBalls()
        .send(tx)
        .then((res) => {
          console.log('i have balls', res)
          return nervos.listeners.listenToTransactionReceipt(res.hash)
        })
        .then((res) => {
          console.log(res)
          const err = res.errorMessage
          if (err === 'Reverted.') {
            console.log('失败')
          } else if (err) {
            throw err
          } else {
            console.log('成功')
          }
        })
        .catch((err) => {
          console.error(err)
        })
    })
  }
  render() {
    const { count, countDown, balance } = this.state
    return (
      <div style={{ background: `url(${background})`, backgroundSize: 'cover', height: '100%', }}>
        <DragonBall />

        <Row type="flex" justify="center" style={{ paddingTop: 0 }}>
          <Col className={'tip'} span={12} style={{ textAlign: 'center' }}>
            NOS:
            {balance}
          </Col>
        </Row>
        <Row type="flex" justify="center" style={{ paddingTop: 0 }}>
          <Col className={'tip'} span={8} style={{ textAlign: 'center' }}>
            已召唤神龙次数:
          </Col>
          <Col className={'tip'} span={2}>
            {count}
          </Col>
        </Row>
        <div style={{ textAlign: 'center', paddingTop: 0 }}>
          <Button onClick={this.haveDragon} style={{ offsetHorizontal: '50%' }}>
            召唤神龙
          </Button>
        </div>
        {/*<Row type="flex" justify="center" style={{paddingTop: 8}}>*/}
        {/*<Col className={"tip"} span={12} style={{textAlign: "center"}}>{countDown}</Col>*/}
        {/*</Row>*/}
        <Row type="flex" justify="center" style={{ paddingTop: 8 }}>
          <Col span={12} style={{ textAlign: 'center' }}>
            <Link to={'/rule'}>
              <Button>游戏规则</Button>
            </Link>
          </Col>
        </Row>
        {/* <Row type="flex" justify="center" style={{ paddingTop: 8 }}>
          <Col span={12} style={{ textAlign: 'center' }}>
            <Link to={'/record'}>
              <Button>得奖记录</Button>
            </Link>
          </Col>
        </Row> */}
        <BottomNav />
      </div>
    )
  }
}

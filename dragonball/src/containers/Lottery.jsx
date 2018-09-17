import React, { Component } from 'react'
import { InputNumber, Row, Col, Button, Input } from 'antd'
import { transaction, dragonBallContract } from '../contracts/dragonball'
import nervos from '../config/nervos'

const log = console.log.bind(console, '>>>')

export default class Lottery extends React.Component {
  constructor(props) {
    super(props)
    this.state = { referral: '', amount: 1 }
  }

  // 成功
  get_ball = () => {
    const { referral, amount } = this.state
    log(amount)
    nervos.appchain
      .getBlockNumber()
      .then((current) => {
        const tx = {
          ...transaction,
          from: window.neuron.getAccount(),
          value: (1 * amount).toString(16),
          validUntilBlock: +current + 88,
          privateKey: window.neuron.getPrivateKey(),
        }
        return dragonBallContract.methods.imFeelingLucky(referral).send(tx)
      })
      .then((res) => {
        log(res)
        if (res.hash) {
          return nervos.listeners.listenToTransactionReceipt(res.hash)
        } else {
          throw new Error('No Transaction Hash Received')
        }
      })
      .then((receipt) => {
        log(receipt)
        if (!receipt.errorMessage) {
          return receipt
          // this.setState({ submitText: submitTexts.submitted })
        } else {
          throw new Error(receipt.errorMessage)
        }
      })
      .then((res) => {
        this.setState({ successLabel: 'Successful' })
      })
      .catch((err) => {
        log(err)
        this.setState({ errorText: JSON.stringify(err) })
      })
  }

  setReferral = (e) => {
    const input = e.target
    this.setState({ referral: input.value })
  }

  setAmount = (value) => {
    log(value)
    this.setState({ amount: value })
  }

  render() {
    return (
      <div style={{ paddingTop: '50%' }}>
        <div>{this.state.successLabel || this.state.errorText}</div>
        <Row type="flex" justify="center">
          <Col span={6}>
            <InputNumber min={1} max={10} defaultValue={1} onChange={this.setAmount} />
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col span={6}>
            <Input id={'referral'} onChange={this.setReferral} placeholder="推荐人地址" />
          </Col>
        </Row>
        <Row type={'flex'} justify={'center'} gutter={24} style={{ paddingTop: 24 }}>
          <Col>
            <Button onClick={this.get_ball}>确认</Button>
          </Col>
          <Col>
            <Button>取消</Button>
          </Col>
        </Row>
      </div>
    )
  }
}

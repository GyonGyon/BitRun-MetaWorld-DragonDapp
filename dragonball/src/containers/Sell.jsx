import React, { Component } from 'react'
import { Row, Col, Button, Select, InputNumber } from 'antd'
import { transaction, dragonBallContract } from '../contracts/dragonball'
import nervos from '../config/nervos'

const Option = Select.Option
export default class Sell extends Component {
  constructor(props) {
    super(props)
    this.state = { amount: 1, type: 0, price: 0 }
  }

  handleChange = (value) => {
    this.setState({ type: value })
    // alert('type'+value)
  }
  //price
  setPrice = (value) => {
    this.setState({ price: value })
    // alert('price'+value)
  }
  setAmount = (value) => {
    this.setState({ amount: value })
    // alert('amount'+value)
  }

  sellBall = () => {
    const { type, amount, price } = this.state
    nervos.appchain.getBlockNumber().then((current) => {
      const tx = {
        ...transaction,
        validUntilBlock: +current + 88,
      }
      return dragonBallContract.methods
        .kameHameHaa(type, amount, price)
        .send(tx)
        .then((res) => {
          console.log('kameHameHaa', res)
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
    return (
      <div style={{ padding: 24, paddingTop: '50%' }}>
        <Row type="flex" justify="center">
          <Col span={24}>
            <Select
              showSearch
              style={{ width: '100%' }}
              placeholder="选择要出售的龙珠种类"
              optionFilterProp="children"
              onChange={this.handleChange}
              defaultValue="1"
              filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
              <Option value="1">一星球</Option>
              <Option value="2">二星球</Option>
              <Option value="3">三星球</Option>
              <Option value="4">四星球</Option>
              <Option value="5">五星球</Option>
              <Option value="6">六星球</Option>
              <Option value="7">七星球</Option>
            </Select>
            ,
          </Col>
        </Row>
        <Row type="flex" justify="left">
          <Col span={8}>
            <div>价格</div>
            <InputNumber min={1} defaultValue={1} onChange={this.setPrice} />
          </Col>
        </Row>
        <Row type="flex" justify="left">
          <Col span={8}>
            <div>数量</div>
            <InputNumber min={1} defaultValue={1} onChange={this.setAmount} />
          </Col>
        </Row>

        <Row type={'flex'} justify={'center'} gutter={24} style={{ paddingTop: 24 }}>
          <Col>
            <Button onClick={this.sellBall}>提交</Button>
          </Col>
        </Row>
      </div>
    )
  }
}

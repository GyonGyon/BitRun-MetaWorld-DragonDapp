import React, {Component} from 'react'

export default class Rule extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div style={{padding: 16}}>
                <p>
                    <br/>
                    <h2>游戏介绍：</h2>

                    游戏玩家在系统中支付代币购买龙珠，每集齐7颗不同龙珠，可召唤神龙一次，并获得平分奖池中大部分奖金的机会。

                    游戏分轮次进行，除奖金底池以外，每一轮独立于其他轮。在当前轮次中任何方式取的龙珠都不会延续到下一轮，同样，之前的任何一轮取得龙珠也不会延续到当前轮。

                    每一轮游戏中，每位游戏玩家允许召唤神龙多次，但每轮游戏中神龙可最多被召唤7次，当神龙被召唤7次后，该轮游戏结束，分配奖池奖金，开启新一轮游戏。

                    游戏玩家可在每轮游戏过程中，出售自己手中的龙珠，价值由卖家自行定义。买家可在龙珠广告区中购买自己需要的龙珠，加速集齐7颗龙珠。
                    <br/>
                    <hr/>
                    <h2>奖励机制 ：</h2>
                    本游戏建立在一个非常简单的奖励机制上，在每轮游戏结束时，将会按照该轮游戏中每位游戏玩家唤醒神龙次数的比例平均分配奖池中的大部分代币，剩下的代币将会进入底池，延续到下一轮。
                    <br/>
                    <hr/>
                    <h2>设置和限制 ：</h2>
                    每一轮游戏持续时间：168小時
                    - 每一轮游戏中，每位游戏玩家每次购买龙珠上限10颗，总量无上限
                    - 每一轮游戏中神龙最多可被召唤7次
                    - 奖池奖金比重：90%，按照每位游戏玩家唤醒神龙次数的比例平均分配
                    - 底池奖金比重：9%，每轮奖池的9%分配至下轮游戏作为底池
                    - 研发团队比重：1%，每轮奖池的1%鼓励给研发团队
                    - 邀请推荐：玩家每邀请1位好友，邀请人与被邀请人均随机获得一颗龙珠
                    - 特殊说明：玩家集齐7颗龙珠，未发起召唤神龙动作，不能分配奖金
                </p>
                <p></p>

            </div>
        )
    }
}
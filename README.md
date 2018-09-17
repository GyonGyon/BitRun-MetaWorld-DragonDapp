# BitRun Hackathon 召唤神龙

本项目基于 BitRun Hackathon 活动中 MetaWorld 团队的参赛项目 **Summon the Dragons**

主要目的是总结 Dapp 的开发流程, 以及部分问题的解决方法

## 使用 Truffle 与 AppChain-Truffle-Migrate 部署合约到 AppChain

- 全局安装 truffle

  - ```shell
    yarn global add truffle
    ```

- 创建 compiled 目录

  - ```shell
    mkdir compiled
    ```

  - 这是为了记录以后部署的合约信息

- 使用 appchain-truffle-box

  - 克隆 appchain-truffle-box

  -  进入 appchain-truffle-box 目录

  - 删除 .git 

  - 安装依赖

  - ```shell
    git clone https://github.com/cryptape/appchain-truffle-box.git
    cd appchain-truffle-box/
    rm -rf .git
    yarn install
    ```

- 配置 appchain-truffle-box

  - 在 contracts 目录中写入 .sol 智能合约文件
  - 在 migrations 目录中写入 .js 迁移函数文件
    - 这里要确保迁移函数中要写入的文件路径是存在的
  - 在 truffle.js 文件中配置相关参数, 如 host, port, privateKey 等
  - 具体代码参照项目, 并根据需要修改

- 部署合约

  - ```shell
    yarn run migrate
    ```

- 至此, 应当已经成功部署了合约, 并获得了合约的 address 以及 abi

## 使用 create-react-app 书写前端代码 

- 初始化前端项目

  - 在项目根目录下新建 dragonball 目录并进入

  - 使用 yarn 初始化

  - 安装 antd 等依赖

  - 编写你的前端代码, 项目中的代码为示例

  - ```shell
    cd ../
    npx create-react-app dragonball
    cd dragonball/
    yarn add antd react-router react-router-dom react-hexgrid @nervos/chain
    yarn start
    ```

- 前端项目目录

  - src/components
    - react 可复用的小组件
  - src/containers
    - react 的容器组件
  - config
    - index.js 链的地址, 私钥
    - transaction.js 默认交易参数
    - neuron.js 为了在浏览器环境下测试而创建的虚拟 neuron
    - nervos.js 为了在浏览器环境下测试而创建的虚拟 nervos
  - contracts
    - dragonballCompiled.js 部署合约后记录的信息, abi & address
    - dragonball.js DragonBall 合约的 nervos contract 对象
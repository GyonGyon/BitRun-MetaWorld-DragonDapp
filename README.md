这是对 BitRun Hackathon 中召唤神龙项目的总结

主要是对 Dapp 开发的流程的总结以及部分问题的解决方法

## 使用 Truffle 与 AppChain-Truffle-Migrate 部署合约到 AppChain

- 全局安装 truffle

  - ```shell
    yarn global add truffle
    ```

- 创建 compiled 目录

  - ```shell
    mkdir compiled
    ```

  - > 这是为了记录以后部署的合约信息

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

  - 在 truffle.js 文件中配置相关参数, 如 host, port, privateKey 等

  - > 具体代码参照项目, 并根据需要修改


- 部署合约

  - ```shell
    yarn run migrate
    ```

- 至此, 应当已经成功部署了合约, 并获得了合约的 address 以及 abi
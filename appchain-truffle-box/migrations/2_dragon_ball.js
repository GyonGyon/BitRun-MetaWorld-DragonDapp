const DragonBall = artifacts.require('DragonBall')
const fs = require('fs')
const path = require('path')

module.exports = function(deployer) {
  deployer.deploy(DragonBall, { quota: 9999999 }).then((contract) => {
    const dirpath = path.resolve(process.cwd(), '../compiled')
    const fpath = path.resolve(dirpath, 'dragonballCompiled.js')
    const f = fs.openSync(fpath, 'w+')
    
    let data = ''
    data += `const address = ${JSON.stringify(contract.address)}\n`
    data += `const abi = ${JSON.stringify(contract.abi)}\n\n`
    data += `export {address, abi}\n`
    
    fs.writeFileSync(f, data)
  })
}

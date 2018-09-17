import { abi, address } from './dragonballCompiled';
import nervos, { transaction } from '../config/nervos'
const dragonBallContract = new nervos.appchain.Contract(abi, address)
console.log(dragonBallContract)
export {
  transaction,
  dragonBallContract,
}

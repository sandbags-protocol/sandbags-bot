import {
  SandbagsBotEvmBaseTrigger,
  SandbagsBotEvmEventTrigger,
} from './trigger'
import { Address, HexString, JudgerCode } from './types'

export interface SandbagsBot<Trigger> {
  id: number
  owner: Address
  trigger: Trigger
  code: JudgerCode
  checksum: HexString
}

export type SandbagsBaseEvmBaseBot = SandbagsBot<SandbagsBotEvmBaseTrigger>
export type SandbagsBaseEvmEventBot = SandbagsBot<SandbagsBotEvmEventTrigger>
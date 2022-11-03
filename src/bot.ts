import {
  SandbagsBotEvmBaseTrigger,
  SandbagsBotEvmEventTrigger,
} from './trigger'
import { Address, JudgerCode } from './types'

export interface SandbagsBot<Trigger> {
  id: number
  owner: Address
  trigger: Trigger
  code: JudgerCode
}

export type SandbagsBaseEvmBaseBot = SandbagsBot<SandbagsBotEvmBaseTrigger>
export type SandbagsBaseEvmEventBot = SandbagsBot<SandbagsBotEvmEventTrigger>

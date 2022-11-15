import {
  SandbagsBotBaseTrigger,
  SandbagsBotEvmBaseTrigger,
  SandbagsBotEvmEventTrigger,
} from './trigger'
import { Address, JudgerCode } from './types'

export interface SandbagsBot<Trigger extends SandbagsBotBaseTrigger> {
  id: number
  owner: Address
  trigger: Trigger
  code: JudgerCode
}

export type SandbagsEvmBaseBot = SandbagsBot<SandbagsBotEvmBaseTrigger>
export type SandbagsEvmEventBot = SandbagsBot<SandbagsBotEvmEventTrigger>

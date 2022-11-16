/* eslint-disable @typescript-eslint/indent */
import { JsonFragment } from '@ethersproject/abi'

export enum SandbagsBotTriggerType {
  event = 'event',
  function = 'function',
}
export enum SandbagsBotTriggerNetwork {
  ethereumMainnet = 'ethereumMainnet',
  ethereumGoerli = 'ethereumGoerli',
  ethereumSepolia = 'ethereumSepolia',
  bscMainnet = 'bscMainnet',
  bscTestnet = 'bscTestnet',
  aptosMainnet = 'aptosMainnet',
}

export interface SandbagsBotBaseTrigger {
  type: SandbagsBotTriggerType
  network: SandbagsBotTriggerNetwork
}

export interface SandbagsBotEvmBaseTrigger extends SandbagsBotBaseTrigger {
  network:
    | SandbagsBotTriggerNetwork.ethereumGoerli
    | SandbagsBotTriggerNetwork.ethereumMainnet
    | SandbagsBotTriggerNetwork.ethereumSepolia
    | SandbagsBotTriggerNetwork.bscMainnet
    | SandbagsBotTriggerNetwork.bscTestnet
  abi?: Array<JsonFragment | string>
}

export interface SandbagsBotEvmEventTrigger extends SandbagsBotEvmBaseTrigger {
  type: SandbagsBotTriggerType.event
  contractAddress: string
  topics?: string[]
}

export enum SandbagsBotTriggerType {
  event = 'event',
  function = 'function',
}
export enum SandbagsBotTriggerNetwork {
  ethereumMainnet = 'ethereumMainnet',
  ethereumGoerli = 'ethereumGoerli',
  aptosMainnet = 'aptosMainnet',
}

export interface SandbagsBotBaseTrigger {
  type: SandbagsBotTriggerType
  network: SandbagsBotTriggerNetwork
  code: string
}

export interface SandbagsBotEvmBaseTrigger extends SandbagsBotBaseTrigger {
  // eslint-disable-next-line prettier/prettier
  network: SandbagsBotTriggerNetwork.ethereumGoerli | SandbagsBotTriggerNetwork.ethereumMainnet
}

export interface SandbagsBotEvmEventTrigger extends SandbagsBotEvmBaseTrigger {
  type: SandbagsBotTriggerType.event
  contractAddress: string
  topics?: string[]
}

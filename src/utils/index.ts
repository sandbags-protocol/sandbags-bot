import { SandbagsBotTriggerNetwork } from '../trigger'

export function getChainId(network: SandbagsBotTriggerNetwork): number {
  switch (network) {
    case SandbagsBotTriggerNetwork.ethereumMainnet: {
      return 1
    }
    case SandbagsBotTriggerNetwork.ethereumGoerli: {
      return 5
    }
    case SandbagsBotTriggerNetwork.ethereumSepolia: {
      return 11155111
    }
    case SandbagsBotTriggerNetwork.bscMainnet: {
      return 56
    }
    case SandbagsBotTriggerNetwork.bscTestnet: {
      return 97
    }
    default:
      break
  }
  return -1
}

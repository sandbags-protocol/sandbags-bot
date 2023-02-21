import { SandbagsBotTriggerNetwork } from '../trigger'
import md5 from 'crypto-js/md5'

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

export function generateBotResultNotificationResponseId(
  transactionHash: string,
  botId: number
): string {
  let hash = transactionHash
  if (!transactionHash.startsWith('0x')) {
    hash = '0x' + hash
  }
  const botIdHash = md5(botId.toString()).toString()
  return '0x' + md5(`${hash}${botIdHash}`).toString()
}

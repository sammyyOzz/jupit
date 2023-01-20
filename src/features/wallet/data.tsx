import usdt from '../../assets/usdt-asset.png'
import eth from '../../assets/eth-asset.png'
import btc from '../../assets/btc-asset.png'

export const assetData = {
  tether: {
    name: 'USDT',
    shortName: 'USDT',
    image: usdt,
    balance: 15000
  },
  bitcoin: {
    name: 'Bitcoin',
    shortName: 'BTC',
    image: btc,
    balance: 0.4869938
  },
  ethereum: {
    name: 'Ethereum',
    shortName: 'ETH',
    image: eth,
    balance: 1.33225
  },
  naira: {
    name: 'Naira',
    shortName: 'NGN',
    balance: '₦89,909,009'
  }
}
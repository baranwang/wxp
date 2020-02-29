import promisify from '../promisify'

export const notifyBLECharacteristicValueChange = (option: WechatMiniprogram.NotifyBLECharacteristicValueChangeOption):
  Promise<WechatMiniprogram.BluetoothError> => promisify(wx.notifyBLECharacteristicValueChange)(option)

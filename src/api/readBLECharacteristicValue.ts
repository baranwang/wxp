import promisify from '../promisify'

export const readBLECharacteristicValue = (option: WechatMiniprogram.ReadBLECharacteristicValueOption):
  Promise<WechatMiniprogram.BluetoothError> => promisify(wx.readBLECharacteristicValue)(option)

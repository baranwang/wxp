import promisify from '../promisify'

export const writeBLECharacteristicValue = (option: WechatMiniprogram.WriteBLECharacteristicValueOption):
  Promise<WechatMiniprogram.BluetoothError> => promisify(wx.writeBLECharacteristicValue)(option)

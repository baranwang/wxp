import promisify from '../promisify'

export default (option: WechatMiniprogram.WriteBLECharacteristicValueOption):
  Promise<WechatMiniprogram.BluetoothError> => promisify(wx.writeBLECharacteristicValue)(option)

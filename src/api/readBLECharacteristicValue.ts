import promisify from '../promisify'

export default (option: WechatMiniprogram.ReadBLECharacteristicValueOption):
  Promise<WechatMiniprogram.BluetoothError> => promisify(wx.readBLECharacteristicValue)(option)

import promisify from '../promisify'

export default (option: WechatMiniprogram.NotifyBLECharacteristicValueChangeOption):
  Promise<WechatMiniprogram.BluetoothError> => promisify(wx.notifyBLECharacteristicValueChange)(option)

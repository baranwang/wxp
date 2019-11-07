import promisify from '../promisify'

export default (option: WechatMiniprogram.CloseBLEConnectionOption):
  Promise<WechatMiniprogram.BluetoothError> => promisify(wx.closeBLEConnection)(option)

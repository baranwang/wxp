import promisify from '../promisify'

export const closeBLEConnection = (option: WechatMiniprogram.CloseBLEConnectionOption):
  Promise<WechatMiniprogram.BluetoothError> => promisify(wx.closeBLEConnection)(option)

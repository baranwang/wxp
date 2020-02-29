import promisify from '../promisify'

export const createBLEConnection = (option: WechatMiniprogram.CreateBLEConnectionOption):
  Promise<WechatMiniprogram.BluetoothError> => promisify(wx.createBLEConnection)(option)

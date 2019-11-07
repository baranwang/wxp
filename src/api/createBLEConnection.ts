import promisify from '../promisify'

export default (option: WechatMiniprogram.CreateBLEConnectionOption):
  Promise<WechatMiniprogram.BluetoothError> => promisify(wx.createBLEConnection)(option)

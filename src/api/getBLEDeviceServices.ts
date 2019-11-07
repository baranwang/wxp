import promisify from '../promisify'

export default (option: WechatMiniprogram.GetBLEDeviceServicesOption):
  Promise<WechatMiniprogram.GetBLEDeviceServicesSuccessCallbackResult> => promisify(wx.getBLEDeviceServices)(option)

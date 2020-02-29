import promisify from '../promisify'

export const getBLEDeviceServices = (option: WechatMiniprogram.GetBLEDeviceServicesOption):
  Promise<WechatMiniprogram.GetBLEDeviceServicesSuccessCallbackResult> => promisify(wx.getBLEDeviceServices)(option)

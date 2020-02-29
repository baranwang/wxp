import promisify from '../promisify'

export const getBLEDeviceCharacteristics = (option: WechatMiniprogram.GetBLEDeviceCharacteristicsOption):
  Promise<WechatMiniprogram.GetBLEDeviceCharacteristicsSuccessCallbackResult> =>
  promisify(wx.getBLEDeviceCharacteristics)(option)

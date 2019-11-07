import promisify from '../promisify'

export default (option: WechatMiniprogram.GetBLEDeviceCharacteristicsOption):
  Promise<WechatMiniprogram.GetBLEDeviceCharacteristicsSuccessCallbackResult> =>
  promisify(wx.getBLEDeviceCharacteristics)(option)

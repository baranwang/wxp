import promisify from '../promisify'

export const getBatteryInfo = (): Promise<WechatMiniprogram.GetBatteryInfoSuccessCallbackResult> => promisify(wx.getBatteryInfo)()

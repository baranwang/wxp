import promisify from '../promisify'

export default (): Promise<WechatMiniprogram.GetBatteryInfoSuccessCallbackResult> => promisify(wx.getBatteryInfo)()

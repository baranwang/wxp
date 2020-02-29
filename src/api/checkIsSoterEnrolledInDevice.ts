import promisify from '../promisify'

export const checkIsSoterEnrolledInDevice = (option: WechatMiniprogram.CheckIsSoterEnrolledInDeviceOption):
  Promise<WechatMiniprogram.CheckIsSoterEnrolledInDeviceSuccessCallbackResult> =>
  promisify(wx.checkIsSoterEnrolledInDevice)(option)

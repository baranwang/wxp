import promisify from '../promisify'

export default (option: WechatMiniprogram.CheckIsSoterEnrolledInDeviceOption):
  Promise<WechatMiniprogram.CheckIsSoterEnrolledInDeviceSuccessCallbackResult> =>
  promisify(wx.checkIsSoterEnrolledInDevice)(option)

import promisify from '../promisify'

export const checkIsSupportSoterAuthentication = (option: WechatMiniprogram.CheckIsSupportSoterAuthenticationOption):
  Promise<WechatMiniprogram.CheckIsSupportSoterAuthenticationSuccessCallbackResult> =>
  promisify(wx.checkIsSupportSoterAuthentication)(option)

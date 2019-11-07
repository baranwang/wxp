import promisify from '../promisify'

export default (option: WechatMiniprogram.CheckIsSupportSoterAuthenticationOption):
  Promise<WechatMiniprogram.CheckIsSupportSoterAuthenticationSuccessCallbackResult> =>
  promisify(wx.checkIsSupportSoterAuthentication)(option)

import promisify from '../promisify'

export default (option: WechatMiniprogram.StartSoterAuthenticationOption):
  Promise<WechatMiniprogram.StartSoterAuthenticationSuccessCallbackResult> =>
  promisify(wx.startSoterAuthentication)(option)

import promisify from '../promisify'

export const startSoterAuthentication = (option: WechatMiniprogram.StartSoterAuthenticationOption):
  Promise<WechatMiniprogram.StartSoterAuthenticationSuccessCallbackResult> => promisify(wx.startSoterAuthentication)(option)

import promisify from '../promisify'

export const getUserInfo = (option: WechatMiniprogram.GetUserInfoOption):
  Promise<WechatMiniprogram.GetUserInfoSuccessCallbackResult> => promisify(wx.getUserInfo)(option)

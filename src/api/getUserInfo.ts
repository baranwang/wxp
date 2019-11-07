import promisify from '../promisify'

export default (option: WechatMiniprogram.GetUserInfoOption):
  Promise<WechatMiniprogram.GetUserInfoSuccessCallbackResult> => promisify(wx.getUserInfo)(option)

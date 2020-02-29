import promisify from '../promisify'

export const getShareInfo = (option: WechatMiniprogram.GetShareInfoOption):
  Promise<WechatMiniprogram.GetShareInfoSuccessCallbackResult> => promisify(wx.getShareInfo)(option)

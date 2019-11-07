import promisify from '../promisify'

export default (option: WechatMiniprogram.GetShareInfoOption):
  Promise<WechatMiniprogram.GetShareInfoSuccessCallbackResult> => promisify(wx.getShareInfo)(option)

import promisify from '../promisify'

export default (option: WechatMiniprogram.GetImageInfoOption):
  Promise<WechatMiniprogram.GetImageInfoSuccessCallbackResult> => promisify(wx.getImageInfo)(option)

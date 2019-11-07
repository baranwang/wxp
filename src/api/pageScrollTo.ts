import promisify from '../promisify'

export default (option: WechatMiniprogram.PageScrollToOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.pageScrollTo)(option)

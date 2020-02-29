import promisify from '../promisify'

export const pageScrollTo = (option: WechatMiniprogram.PageScrollToOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.pageScrollTo)(option)

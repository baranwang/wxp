import promisify from '../promisify'

export const setTopBarText = (option: WechatMiniprogram.PageScrollToOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.setTopBarText)(option)

import promisify from '../promisify'

export const showShareMenu = (option: WechatMiniprogram.ShowShareMenuOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.showShareMenu)(option)

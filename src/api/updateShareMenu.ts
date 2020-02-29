import promisify from '../promisify'

export const updateShareMenu = (option: WechatMiniprogram.UpdateShareMenuOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.updateShareMenu)(option)

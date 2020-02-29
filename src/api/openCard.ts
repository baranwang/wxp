import promisify from '../promisify'

export const openCard = (option: WechatMiniprogram.OpenCardOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.openCard)(option)

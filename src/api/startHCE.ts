import promisify from '../promisify'

export const startHCE = (option: WechatMiniprogram.StartHCEOption):
  Promise<WechatMiniprogram.NFCError> => promisify(wx.startHCE)(option)

import promisify from '../promisify'

export const sendHCEMessage = (option: WechatMiniprogram.SendHCEMessageOption):
  Promise<WechatMiniprogram.NFCError> => promisify(wx.sendHCEMessage)(option)

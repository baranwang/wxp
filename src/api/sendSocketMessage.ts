import promisify from '../promisify'

export const sendSocketMessage = (option: WechatMiniprogram.SendSocketMessageOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.sendSocketMessage)(option)

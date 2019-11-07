import promisify from '../promisify'

export default (option: WechatMiniprogram.SendSocketMessageOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.sendSocketMessage)(option)

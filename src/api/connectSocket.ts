import promisify from '../promisify'

export const connectSocket = (option: WechatMiniprogram.ConnectSocketOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.connectSocket)(option)

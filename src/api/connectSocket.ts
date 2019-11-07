import promisify from '../promisify'

export default (option: WechatMiniprogram.ConnectSocketOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.connectSocket)(option)

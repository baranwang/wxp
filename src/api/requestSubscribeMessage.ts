import promisify from '../promisify'

export const requestSubscribeMessage = (option: WechatMiniprogram.RequestSubscribeMessageOption):
  Promise<WechatMiniprogram.RequestSubscribeMessageSuccessCallbackResult> =>
  promisify(wx.requestSubscribeMessage)(option)

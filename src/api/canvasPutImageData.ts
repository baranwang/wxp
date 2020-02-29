import promisify from '../promisify'

export const canvasPutImageData = (
  option: WechatMiniprogram.CanvasPutImageDataOption,
  component?: WechatMiniprogram.Component.TrivialInstance | WechatMiniprogram.Page.TrivialInstance,
): Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.canvasPutImageData)(option, component)

import promisify from '../promisify'

export const canvasGetImageData = (
  option: WechatMiniprogram.CanvasGetImageDataOption,
  component?: WechatMiniprogram.Component.TrivialInstance | WechatMiniprogram.Page.TrivialInstance,
): Promise<WechatMiniprogram.CanvasGetImageDataSuccessCallbackResult> =>
  promisify(wx.canvasGetImageData)(option, component)

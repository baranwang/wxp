import promisify from '../promisify'

export default (
  option: WechatMiniprogram.CanvasToTempFilePathOption,
  component?: WechatMiniprogram.Component.TrivialInstance | WechatMiniprogram.Page.TrivialInstance,
): Promise<WechatMiniprogram.CanvasToTempFilePathSuccessCallbackResult> =>
  promisify(wx.canvasToTempFilePath)(option, component)

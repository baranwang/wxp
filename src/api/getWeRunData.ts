import promisify from '../promisify'

export default (): Promise<WechatMiniprogram.GetWeRunDataSuccessCallbackResult> => promisify(wx.getWeRunData)()

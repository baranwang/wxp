import promisify from '../promisify'

export default (): Promise<WechatMiniprogram.StartRecordSuccessCallbackResult> => promisify(wx.startRecord)()

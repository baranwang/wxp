import promisify from '../promisify'

export default (): Promise<WechatMiniprogram.GetExtConfigSuccessCallbackResult> => promisify(wx.getExtConfig)()

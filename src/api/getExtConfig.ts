import promisify from '../promisify'

export const getExtConfig = (): Promise<WechatMiniprogram.GetExtConfigSuccessCallbackResult> => promisify(wx.getExtConfig)()

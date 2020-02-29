import promisify from '../promisify'

export const vibrateLong = (): Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.vibrateLong)()

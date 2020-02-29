import promisify from '../promisify'

export const vibrateShort = (): Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.vibrateShort)()

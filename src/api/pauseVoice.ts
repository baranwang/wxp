import promisify from '../promisify'

export const pauseVoice = (): Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.pauseVoice)()

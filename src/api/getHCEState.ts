import promisify from '../promisify'

export const getHCEState = (): Promise<WechatMiniprogram.NFCError> => promisify(wx.getHCEState)()

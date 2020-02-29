import promisify from '../promisify'

export const stopHCE = ():
  Promise<WechatMiniprogram.NFCError> => promisify(wx.stopHCE)()

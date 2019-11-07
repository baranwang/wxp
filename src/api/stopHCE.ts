import promisify from '../promisify'

export default (): Promise<WechatMiniprogram.NFCError> => promisify(wx.stopHCE)()

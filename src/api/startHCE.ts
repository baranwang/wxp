import promisify from '../promisify'

export default (option: WechatMiniprogram.StartHCEOption):
  Promise<WechatMiniprogram.NFCError> => promisify(wx.startHCE)(option)

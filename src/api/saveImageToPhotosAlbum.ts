import promisify from '../promisify'

export default (option: WechatMiniprogram.SaveImageToPhotosAlbumOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.saveImageToPhotosAlbum)(option)

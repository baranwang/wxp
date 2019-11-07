import promisify from '../promisify'

export default (option: WechatMiniprogram.SaveVideoToPhotosAlbumOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.saveVideoToPhotosAlbum)(option)

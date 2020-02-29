import promisify from '../promisify'

export const saveVideoToPhotosAlbum = (option: WechatMiniprogram.SaveVideoToPhotosAlbumOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.saveVideoToPhotosAlbum)(option)

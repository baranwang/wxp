import promisify from '../promisify'

export const saveImageToPhotosAlbum = (option: WechatMiniprogram.SaveImageToPhotosAlbumOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.saveImageToPhotosAlbum)(option)

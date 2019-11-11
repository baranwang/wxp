import promisify from '../promisify'

interface IOpenBusinessViewOption {
  /** 固定值 friendGoodsRecommend */
  businessType: 'friendGoodsRecommend'
  /** 物品信息 */
  extraData: {
    /** 商品概要 */
    product: {
      /** 物品ID，开发者自定义的ID，需要保证唯一性 */
      item_code: string
      /** 物品名称 */
      title: string
      /** 物品高清图URL列表， 要求图片宽度大于750px，宽高比在4:3 - 1:1之间 */
      image_list: string[],
    },
  }
}

interface IWx extends WechatMiniprogram.Wx {
  openBusinessView(option: IOpenBusinessViewOption): WechatMiniprogram.GeneralCallbackResult
}

export default (option: IOpenBusinessViewOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify((wx as IWx).openBusinessView)(option)

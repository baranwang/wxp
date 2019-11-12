# weapp-api-promise

[![npm](https://img.shields.io/npm/v/weapp-api-promise?style=flat-square)](https://www.npmjs.com/package/weapp-api-promise)
[![license](https://img.shields.io/github/license/baranwang/wxp.svg?style=flat-square)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

微信小程序 API 基于 TypeScript 的 Promise 化

## 安装

```bash
yarn add weapp-api-promise
# or
npm i weapp-api-promise
```

## 使用

### 全量加载

```typescript
import wxp from "weapp-api-promise";

wxp
  .request({
    url: "https://foo.bar/api.json"
  })
  .then(res => {
    console.log(res);
  });
```

### 按需加载

```typescript
import { request } from "weapp-api-promise";

request({
  url: "https://foo.bar/api.json"
}).then(res => {
  console.log(res);
});
```

完整 Promise 化 API 列表

```typescript
import {
  $router,
  addCard,
  addPhoneContact,
  authorize,
  canvasGetImageData,
  canvasToTempFilePath,
  checkIsSoterEnrolledInDevice,
  checkIsSupportSoterAuthentication,
  checkSession,
  chooseAddress,
  chooseImage,
  chooseInvoice,
  chooseInvoiceTitle,
  chooseLocation,
  chooseMessageFile,
  chooseVideo,
  clearStorage,
  closeBLEConnection,
  compressImage,
  connectSocket,
  connectWifi,
  createBLEConnection,
  downloadFile,
  getAvailableAudioSources,
  getBackgroundAudioPlayerState,
  getBackgroundFetchData,
  getBackgroundFetchToken,
  getBatteryInfo,
  getBLEDeviceCharacteristics,
  getBLEDeviceServices,
  getClipboardData,
  getConnectedWifi,
  getExtConfig,
  getFileInfo,
  getHCEState,
  getImageInfo,
  getLocation,
  getNetworkType,
  getSavedFileList,
  getScreenBrightness,
  getSelectedTextRange,
  getSetting,
  getShareInfo,
  getStorage,
  getStorageInfo,
  getSystemInfo,
  getUserInfo,
  getWeRunData,
  getWifiList,
  hideHomeButton,
  hideKeyboard,
  hideLoading,
  hideNavigationBarLoading,
  hideShareMenu,
  hideTabBar,
  hideTabBarRedDot,
  hideToast,
  loadFontFace,
  login,
  makePhoneCall,
  navigateBack,
  navigateBackMiniProgram,
  navigateTo,
  navigateToMiniProgram,
  notifyBLECharacteristicValueChange,
  onBackgroundFetchData,
  openBusinessView,
  openCard,
  openDocument,
  openLocation,
  openSetting,
  pageScrollTo,
  pauseBackgroundAudio,
  pauseVoice,
  playBackgroundAudio,
  playVoice,
  previewImage,
  readBLECharacteristicValue,
  redirectTo,
  reLaunch,
  removeSavedFile,
  removeStorage,
  removeTabBarBadge,
  request,
  requestPayment,
  requestSubscribeMessage,
  saveFile,
  saveImageToPhotosAlbum,
  saveVideoToPhotosAlbum,
  scanCode,
  seekBackgroundAudio,
  sendHCEMessage,
  sendSocketMessage,
  setBackgroundColor,
  setBackgroundFetchToken,
  setBackgroundTextStyle,
  setClipboardData,
  setEnableDebug,
  setInnerAudioOption,
  setKeepScreenOn,
  setNavigationBarColor,
  setNavigationBarTitle,
  setScreenBrightness,
  setStorage,
  setTabBarBadge,
  setTabBarItem,
  setTabBarStyle,
  setTopBarText,
  setWifiList,
  showActionSheet,
  showLoading,
  showModal,
  showNavigationBarLoading,
  showShareMenu,
  showTabBar,
  showTabBarRedDot,
  showToast,
  startAccelerometer,
  startBeaconDiscovery,
  startCompass,
  startDeviceMotionListening,
  startGyroscope,
  startHCE,
  startLocalServiceDiscovery,
  startLocationUpdate,
  startLocationUpdateBackground,
  startPullDownRefresh,
  startRecord,
  startSoterAuthentication,
  stopAccelerometer,
  stopBackgroundAudio,
  stopBeaconDiscovery,
  stopCompass,
  stopDeviceMotionListening,
  stopGyroscope,
  stopHCE,
  stopLocalServiceDiscovery,
  stopLocationUpdate,
  stopPullDownRefresh,
  stopRecord,
  stopVoice,
  stopWifi,
  switchTab,
  updateShareMenu,
  uploadFile,
  vibrateLong,
  vibrateShort,
  writeBLECharacteristicValue
} from "weapp-api-promise";
```

## [\$router 方法](https://github.com/baranwang/wxp/blob/master/src/api/$router.ts)

包含 `navigate`、`redirect`、`switchTab`、`back` 四个方法，分别对应原生的 `wx.navigateTo`、`wx.redirectTo`、`wx.switchTab`、`wx.navigateBack` 方法

同时当页面栈超过 10 层或其他异常时，尝试改用 `redirectTo` 重试

```typescript
import wxp from "weapp-api-promise";

wxp.$router.navigate("path", {
  foo: "bar"
}); // => wx.navigateTo({ url: 'path?foo=bar', fail: () => wx.redirectTo({ url: 'path?foo=bar' }) })
```

## License

MIT @ [baranwang](https://github.com/baranwang)

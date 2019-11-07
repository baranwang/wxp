import $router from './api/$router'
import addCard from './api/addCard'
import addPhoneContact from './api/addPhoneContact'
import authorize from './api/authorize'
import canvasGetImageData from './api/canvasGetImageData'
import canvasToTempFilePath from './api/canvasToTempFilePath'
import checkIsSoterEnrolledInDevice from './api/checkIsSoterEnrolledInDevice'
import checkIsSupportSoterAuthentication from './api/checkIsSupportSoterAuthentication'
import checkSession from './api/checkSession'
import chooseAddress from './api/chooseAddress'
import chooseImage from './api/chooseImage'
import chooseInvoice from './api/chooseInvoice'
import chooseInvoiceTitle from './api/chooseInvoiceTitle'
import chooseLocation from './api/chooseLocation'
import chooseMessageFile from './api/chooseMessageFile'
import chooseVideo from './api/chooseVideo'
import clearStorage from './api/clearStorage'
import closeBLEConnection from './api/closeBLEConnection'
import compressImage from './api/compressImage'
import connectSocket from './api/connectSocket'
import connectWifi from './api/connectWifi'
import createBLEConnection from './api/createBLEConnection'
import downloadFile from './api/downloadFile'
import getAvailableAudioSources from './api/getAvailableAudioSources'
import getBackgroundAudioPlayerState from './api/getBackgroundAudioPlayerState'
import getBackgroundFetchData from './api/getBackgroundFetchData'
import getBackgroundFetchToken from './api/getBackgroundFetchToken'
import getBatteryInfo from './api/getBatteryInfo'
import getBLEDeviceCharacteristics from './api/getBLEDeviceCharacteristics'
import getBLEDeviceServices from './api/getBLEDeviceServices'
import getClipboardData from './api/getClipboardData'
import getConnectedWifi from './api/getConnectedWifi'
import getExtConfig from './api/getExtConfig'
import getFileInfo from './api/getFileInfo'
import getHCEState from './api/getHCEState'
import getImageInfo from './api/getImageInfo'
import getLocation from './api/getLocation'
import getNetworkType from './api/getNetworkType'
import getSavedFileList from './api/getSavedFileList'
import getScreenBrightness from './api/getScreenBrightness'
import getSelectedTextRange from './api/getSelectedTextRange'
import getSetting from './api/getSetting'
import getShareInfo from './api/getShareInfo'
import getStorage from './api/getStorage'
import getStorageInfo from './api/getStorageInfo'
import getSystemInfo from './api/getSystemInfo'
import getUserInfo from './api/getUserInfo'
import getWeRunData from './api/getWeRunData'
import getWifiList from './api/getWifiList'
import hideHomeButton from './api/hideHomeButton'
import hideKeyboard from './api/hideKeyboard'
import hideLoading from './api/hideLoading'
import hideNavigationBarLoading from './api/hideNavigationBarLoading'
import hideShareMenu from './api/hideShareMenu'
import hideTabBar from './api/hideTabBar'
import hideTabBarRedDot from './api/hideTabBarRedDot'
import hideToast from './api/hideToast'
import loadFontFace from './api/loadFontFace'
import login from './api/login'
import makePhoneCall from './api/makePhoneCall'
import navigateBack from './api/navigateBack'
import navigateBackMiniProgram from './api/navigateBackMiniProgram'
import navigateTo from './api/navigateTo'
import navigateToMiniProgram from './api/navigateToMiniProgram'
import notifyBLECharacteristicValueChange from './api/notifyBLECharacteristicValueChange'
import onBackgroundFetchData from './api/onBackgroundFetchData'
import openCard from './api/openCard'
import openDocument from './api/openDocument'
import openLocation from './api/openLocation'
import openSetting from './api/openSetting'
import pageScrollTo from './api/pageScrollTo'
import pauseBackgroundAudio from './api/pauseBackgroundAudio'
import pauseVoice from './api/pauseVoice'
import playBackgroundAudio from './api/playBackgroundAudio'
import playVoice from './api/playVoice'
import previewImage from './api/previewImage'
import readBLECharacteristicValue from './api/readBLECharacteristicValue'
import redirectTo from './api/redirectTo'
import reLaunch from './api/reLaunch'
import removeSavedFile from './api/removeSavedFile'
import removeStorage from './api/removeStorage'
import removeTabBarBadge from './api/removeTabBarBadge'
import request from './api/request'
import requestPayment from './api/requestPayment'
import requestSubscribeMessage from './api/requestSubscribeMessage'
import saveFile from './api/saveFile'
import saveImageToPhotosAlbum from './api/saveImageToPhotosAlbum'
import saveVideoToPhotosAlbum from './api/saveVideoToPhotosAlbum'
import scanCode from './api/scanCode'
import seekBackgroundAudio from './api/seekBackgroundAudio'
import sendHCEMessage from './api/sendHCEMessage'
import sendSocketMessage from './api/sendSocketMessage'
import setBackgroundColor from './api/setBackgroundColor'
import setBackgroundFetchToken from './api/setBackgroundFetchToken'
import setBackgroundTextStyle from './api/setBackgroundTextStyle'
import setClipboardData from './api/setClipboardData'
import setEnableDebug from './api/setEnableDebug'
import setInnerAudioOption from './api/setInnerAudioOption'
import setKeepScreenOn from './api/setKeepScreenOn'
import setNavigationBarColor from './api/setNavigationBarColor'
import setNavigationBarTitle from './api/setNavigationBarTitle'
import setScreenBrightness from './api/setScreenBrightness'
import setStorage from './api/setStorage'
import setTabBarBadge from './api/setTabBarBadge'
import setTabBarItem from './api/setTabBarItem'
import setTabBarStyle from './api/setTabBarStyle'
import setTopBarText from './api/setTopBarText'
import setWifiList from './api/setWifiList'
import showActionSheet from './api/showActionSheet'
import showLoading from './api/showLoading'
import showModal from './api/showModal'
import showNavigationBarLoading from './api/showNavigationBarLoading'
import showShareMenu from './api/showShareMenu'
import showTabBar from './api/showTabBar'
import showTabBarRedDot from './api/showTabBarRedDot'
import showToast from './api/showToast'
import startAccelerometer from './api/startAccelerometer'
import startBeaconDiscovery from './api/startBeaconDiscovery'
import startCompass from './api/startCompass'
import startDeviceMotionListening from './api/startDeviceMotionListening'
import startGyroscope from './api/startGyroscope'
import startHCE from './api/startHCE'
import startLocalServiceDiscovery from './api/startLocalServiceDiscovery'
import startLocationUpdate from './api/startLocationUpdate'
import startLocationUpdateBackground from './api/startLocationUpdateBackground'
import startPullDownRefresh from './api/startPullDownRefresh'
import startRecord from './api/startRecord'
import startSoterAuthentication from './api/startSoterAuthentication'
import stopAccelerometer from './api/stopAccelerometer'
import stopBackgroundAudio from './api/stopBackgroundAudio'
import stopBeaconDiscovery from './api/stopBeaconDiscovery'
import stopCompass from './api/stopCompass'
import stopDeviceMotionListening from './api/stopDeviceMotionListening'
import stopGyroscope from './api/stopGyroscope'
import stopHCE from './api/stopHCE'
import stopLocalServiceDiscovery from './api/stopLocalServiceDiscovery'
import stopLocationUpdate from './api/stopLocationUpdate'
import stopPullDownRefresh from './api/stopPullDownRefresh'
import stopRecord from './api/stopRecord'
import stopVoice from './api/stopVoice'
import stopWifi from './api/stopWifi'
import switchTab from './api/switchTab'
import updateShareMenu from './api/updateShareMenu'
import uploadFile from './api/uploadFile'
import vibrateLong from './api/vibrateLong'
import vibrateShort from './api/vibrateShort'
import writeBLECharacteristicValue from './api/writeBLECharacteristicValue'

export default {
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
  writeBLECharacteristicValue,
}

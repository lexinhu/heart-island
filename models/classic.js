import { HTTP } from '../utils/http'

class ClassicModel extends HTTP {

  getLatest(sCallback) {
    this.request({
      url: 'classic/latest',
      success: (res) => {
        sCallback(res)
        this._setLatestIndex(res.index)
        wx.setStorageSync(this._getKey(res.index), res)
      }
    })
  }

  getClassic(index, nextOrPrevious, sCallback) {
    //获取key格式，判断是前还是后
    let key = nextOrPrevious == 'next' ? this._getKey(index + 1) : this._getKey(index - 1)
    //试图获取缓存
    let classic = wx.getStorageSync(key)
    if (!classic) {
      this.request({
        url: 'classic/' + index + '/' + nextOrPrevious,
        success: (res) => {
          wx.setStorageSync(this._getKey(res.index), res)
          sCallback(res)
        }
      })
    } else {
      sCallback(classic)
    }
  }

  isFirst(index) {
    return index == 1 ? true : false
  }

  isLatest(index) {
    console.log(index)
    let latestIndex = this._getLatestIndex()
    console.log(latestIndex)
    return latestIndex == index ? true : false;
  }

  _setLatestIndex(index) {
    wx.setStorage({
      data: index,
      key: 'latest',
    })
  }

  _getLatestIndex() {
    let index = wx.getStorageSync('latest')
    return index;
  }

  _getKey(index) {
    const key = 'classic-' + index
    return key
  }

}
export { ClassicModel }
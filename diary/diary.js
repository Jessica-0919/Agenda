// pages/diary/diary.js

const app = getApp()
 
Page({
  data: {
    today: '',
    desArr: []
  },
 
  
  newBtnDown() {
    wx.navigateTo({
      url: '../edit/edit'
    })
  },
  
  onLoad: function (options) {
   
    this.setData({
      desArr: wx.getStorageSync('oldText')
    })
    if (this.data.desArr == null && this.data.desArr == '') {
      this.setData({
        desArr: []
      })
    }
   
  },
  onShow: function () {
    var arrayA = wx.getStorageSync('oldText');
    var isChange = wx.getStorageSync('isChange');
    if (arrayA.length != this.data.desArr.length) {
      this.setData({
        desArr: arrayA
      })
    } else if (isChange == 1) {
      wx.setStorageSync('isChange', 0);
      this.setData({
        desArr: arrayA
      })
    }
  },
  
  cancelTap(e) {
    console.log(e)
  }
})

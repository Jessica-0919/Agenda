// pages/diary/edit/edit.js
Page({
  data: {
    time: '',
    image: '../../agenda/edit-bg.jpg',
    textAreaDes: '',
    revise: '',
    id: ''
  },
  btnDown() {
    if (this.data.textAreaDes.length == 0) {
      return;
    }
    var oldText = wx.getStorageSync('oldText');
    if (oldText != null && oldText != '') {
      if (this.data.revise == '1') {
        console.log(oldText)
        for (var i = 0; i < oldText.length; i++) {
          var dic = oldText[i];
          if (dic.id == this.data.id) {
            oldText[i] = { 'des': this.data.textAreaDes, time: dic.time, 'id': dic.id };
            console.log(oldText)
            wx.setStorageSync('oldText', oldText);
            wx.setStorageSync('isChange', 1);
            return;
          }
        }
      } else {
        var numID = wx.getStorageSync('oldTextID');
        if (numID == this.data.id) {
          return;
        }
        oldText.push({ 'des': this.data.textAreaDes, time: this.data.time, 'id': numID });
        numID++;
        wx.setStorageSync('oldTextID', numID);
        this.setData({
          id: numID
        })
      }
    } else {
      oldText = [{ 'des': this.data.textAreaDes, time: this.data.time, 'id': 0 }];
      wx.setStorageSync('oldTextID', 1);
      this.setData({
        id: 1
      })
    }
    wx.setStorageSync('oldText', oldText);
  },
  bindTextAreaBlur(e) {
   
    this.setData({
      textAreaDes: e.detail.value
    })
  },
  onLoad: function (options) {
    this.setData({
      des: options.des,
      time: options.time,
      image: options.image,
      revise: options.revise,
      id: options.id
    })
  }
})

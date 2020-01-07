// pages/mine/enrollList/enrollList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: {
      enrollList: [
        {
          "enrollId": 1,
          "businessLogo": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578117350788&di=cf8bfe3a2baf71fa3b5b3418d80a9f97&imgtype=0&src=http%3A%2F%2Fd.ifengimg.com%2Fw600%2Fp0.ifengimg.com%2Fpmop%2F2018%2F0406%2FB6EBEFEB3603EE41D1AD687F6AFB01376C2B4C28_size19_w640_h640.jpeg",
          "activityTitle": "活动标题活动标题活动标题活动标题活动标题活动标题",
          "date": "02/01(周五)",
          "position": "蓬江区",
          "enrollTime": "01/05 13:44"
        },
        {
          "enrollId": 2,
          "businessLogo": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578117350788&di=cf8bfe3a2baf71fa3b5b3418d80a9f97&imgtype=0&src=http%3A%2F%2Fd.ifengimg.com%2Fw600%2Fp0.ifengimg.com%2Fpmop%2F2018%2F0406%2FB6EBEFEB3603EE41D1AD687F6AFB01376C2B4C28_size19_w640_h640.jpeg",
          "activityTitle": "活动标题活动标题活动标题活动标题活动标题活动标题",
          "date": "02/01(周五)",
          "position": "蓬江区",
          "enrollTime": "01/05 13:44"
        }
      ]
    }
  },

  bindTapEnrollDetail: function (e) {
    let enrollId = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../enrollDetail/enrollDetail?id=' + enrollId,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
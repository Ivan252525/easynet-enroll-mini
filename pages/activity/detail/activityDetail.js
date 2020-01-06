// pages/activity/detail/activityDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activityId: null,
    data: {
      mainImage: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578128612612&di=a301d8ee613f4f1e4e9bfd0b97c13129&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D4073629333%2C1011902490%26fm%3D214%26gp%3D0.jpg",
      title: "喜茶蹦迪喜茶蹦迪喜茶蹦迪喜茶蹦迪喜茶蹦迪喜茶蹦迪喜茶蹦迪喜茶蹦迪"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      activityId: options.activityId
    })
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
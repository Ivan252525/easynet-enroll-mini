const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: [
      {
        id: 1,
        mainImage: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3151958140,3815610019&fm=26&gp=0.jpg",
        title: "喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶",
        date: "02/15(周六)",
        position: "蓬江区"
      },
      {
        id: 2,
        mainImage: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3151958140,3815610019&fm=26&gp=0.jpg",
        title: "喜茶喜茶喜茶喜茶",
        date: "02/15(周六)",
        position: "蓬江区"
      },
      {
        id: 3,
        mainImage: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3151958140,3815610019&fm=26&gp=0.jpg",
        title: "喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶",
        date: "02/15(周六)",
        position: "蓬江区"
      },
      {
        id: 4,
        mainImage: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3151958140,3815610019&fm=26&gp=0.jpg",
        title: "喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶",
        date: "02/15(周六)",
        position: "蓬江区"
      },
      {
        id: 3,
        mainImage: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3151958140,3815610019&fm=26&gp=0.jpg",
        title: "喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶",
        date: "02/15(周六)",
        position: "蓬江区"
      },
      {
        id: 4,
        mainImage: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3151958140,3815610019&fm=26&gp=0.jpg",
        title: "喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶",
        date: "02/15(周六)",
        position: "蓬江区"
      },
      {
        id: 3,
        mainImage: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3151958140,3815610019&fm=26&gp=0.jpg",
        title: "喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶",
        date: "02/15(周六)",
        position: "蓬江区"
      },
      {
        id: 4,
        mainImage: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3151958140,3815610019&fm=26&gp=0.jpg",
        title: "喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶",
        date: "02/15(周六)",
        position: "蓬江区"
      },
      {
        id: 3,
        mainImage: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3151958140,3815610019&fm=26&gp=0.jpg",
        title: "喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶",
        date: "02/15(周六)",
        position: "蓬江区"
      },
      {
        id: 4,
        mainImage: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3151958140,3815610019&fm=26&gp=0.jpg",
        title: "喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶",
        date: "02/15(周六)",
        position: "蓬江区"
      },
    ]
  },

  bindActivityTap: function (e) {
    let activityId = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../../activity/detail/activityDetail?activityId=' + activityId
    })
  },

  getViewData() {
    let _this = this;

    wx.showLoading({
      title: "",
    })

    wx.request({
      url: app.globalData.url + '/server/activity/activity/listusercollect',
      method: "GET",
      header: {
        'token': JSON.parse(wx.getStorageSync('session')).token
      },
      success(res) {
        if (res.statusCode == 200 && res.data.code == 200) {
          let data = res.data.data;
          _this.setData({
            data: data
          })
        } else {
          wx.showModal({
            title: '失败',
            content: '请稍后再试',
          })
        }
      },
      complete() {
        wx.hideLoading()
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getViewData()
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
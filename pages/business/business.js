// pages/business/business.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    data: {
      isLike : 0,
      likeNum: 1200,
      businessName: "喜茶喜茶",
      logo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578117350788&di=cf8bfe3a2baf71fa3b5b3418d80a9f97&imgtype=0&src=http%3A%2F%2Fd.ifengimg.com%2Fw600%2Fp0.ifengimg.com%2Fpmop%2F2018%2F0406%2FB6EBEFEB3603EE41D1AD687F6AFB01376C2B4C28_size19_w640_h640.jpeg",
      about: "商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍商家介绍",
      activityList: [
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
      ],
    }
  },

  bindActivityTap: function (e) {
    let activityId = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../../activity/detail/activityDetail?activityId=' + activityId
    })
  },

  bindTapLike: function (e) {
    let data = this.data.data;
    if (this.data.data.isLike == 0) {
      // 添加关注
      data.isLike = 1;
      data.likeNum = data.likeNum + 1;
      this.setData({
        data: data
      })
    } else {
      // 取消关注
      data.isLike = 0;
      data.likeNum = data.likeNum - 1;
      this.setData({
        data: data
      })
    }
  },

  bindActivityTap: function (e) {
    let activityId = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../activity/detail/activityDetail?activityId=' + activityId
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id,
    })
    console.log(this.data.id)
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
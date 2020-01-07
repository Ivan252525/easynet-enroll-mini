// pages/activity/list/activityList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    choiceState: false,
    choicePosition: false,
    showMask: false,
    stateOptionIndex: 0,
    positionOptionIndex: 0,
    stateStr: "状态",
    stateStrArr: ['状态', '报名中', '即将开始', '报名结束'],
    positionStr: "地点",
    positionStrArr: ['地点', '蓬江区', '江海区', '新会区', '开平市', '恩平市', '台山市', '鹤山市'],
    data: {
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

  bindChoiceState: function () {
    this.setData({
      choiceState: !this.data.choiceState,
      choicePosition: false,
      showMask: !this.data.choiceState,
    })
  },

  bindChoicePosition: function () {
    this.setData({
      choiceState: false,
      choicePosition: !this.data.choicePosition,
      showMask: !this.data.choicePosition,
    })
  },

  bindTapState: function (e) {
    let state = e.currentTarget.dataset.index;
    this.setData({
      choiceState: false,
      showMask: false,
      stateOptionIndex: state,
      stateStr: this.data.stateStrArr[state],
    })
  },

  bindTapPosition: function (e) {
    let position = e.currentTarget.dataset.index;
    this.setData({
      choicePosition: false,
      showMask: false,
      positionOptionIndex: position,
      positionStr: this.data.positionStrArr[position],
    })
  },

  bindActivityTap: function (e) {
    let activityId = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../../activity/detail/activityDetail?activityId=' + activityId
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
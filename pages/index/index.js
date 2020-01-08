//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    data: {
      banner: [
        {
          url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578114915975&di=db91695a9b5ce51f8ac71c701785fda9&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01af5f58258bb6a84a0e282b7e9d53.jpg%401280w_1l_2o_100sh.jpg",
        },
        {
          url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578114915975&di=29fef85d39c2f861ce1251570843a9fc&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F16%2F87%2F39%2F39v58PICKtX_1024.jpg"
        }
      ],
      recommendationList: [
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
      ],
      "historyList": [
        {
          id: 1,
          mainImage: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3151958140,3815610019&fm=26&gp=0.jpg",
          title: "喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶",
          num: "1280",
          position: "蓬江区"
        },
        {
          id: 1,
          mainImage: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3151958140,3815610019&fm=26&gp=0.jpg",
          title: "喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶",
          num: "1280",
          position: "蓬江区"
        },
        {
          id: 1,
          mainImage: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3151958140,3815610019&fm=26&gp=0.jpg",
          title: "喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶喜茶",
          num: "1280",
          position: "蓬江区"
        },
      ],
      "businessList": [
        {
          id: 1,
          logo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578117350788&di=cf8bfe3a2baf71fa3b5b3418d80a9f97&imgtype=0&src=http%3A%2F%2Fd.ifengimg.com%2Fw600%2Fp0.ifengimg.com%2Fpmop%2F2018%2F0406%2FB6EBEFEB3603EE41D1AD687F6AFB01376C2B4C28_size19_w640_h640.jpeg"
        },
        {
          id: 1,
          logo: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1743471438,2841452186&fm=26&gp=0.jpg"
        },
        {
          id: 1,
          logo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578117350788&di=cf8bfe3a2baf71fa3b5b3418d80a9f97&imgtype=0&src=http%3A%2F%2Fd.ifengimg.com%2Fw600%2Fp0.ifengimg.com%2Fpmop%2F2018%2F0406%2FB6EBEFEB3603EE41D1AD687F6AFB01376C2B4C28_size19_w640_h640.jpeg"
        },
        {
          id: 1,
          logo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578117350788&di=cf8bfe3a2baf71fa3b5b3418d80a9f97&imgtype=0&src=http%3A%2F%2Fd.ifengimg.com%2Fw600%2Fp0.ifengimg.com%2Fpmop%2F2018%2F0406%2FB6EBEFEB3603EE41D1AD687F6AFB01376C2B4C28_size19_w640_h640.jpeg"
        },
        {
          id: 1,
          logo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578117350788&di=cf8bfe3a2baf71fa3b5b3418d80a9f97&imgtype=0&src=http%3A%2F%2Fd.ifengimg.com%2Fw600%2Fp0.ifengimg.com%2Fpmop%2F2018%2F0406%2FB6EBEFEB3603EE41D1AD687F6AFB01376C2B4C28_size19_w640_h640.jpeg"
        },
        {
          id: 1,
          logo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578117350788&di=cf8bfe3a2baf71fa3b5b3418d80a9f97&imgtype=0&src=http%3A%2F%2Fd.ifengimg.com%2Fw600%2Fp0.ifengimg.com%2Fpmop%2F2018%2F0406%2FB6EBEFEB3603EE41D1AD687F6AFB01376C2B4C28_size19_w640_h640.jpeg"
        },
        {
          id: 1,
          logo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578117350788&di=cf8bfe3a2baf71fa3b5b3418d80a9f97&imgtype=0&src=http%3A%2F%2Fd.ifengimg.com%2Fw600%2Fp0.ifengimg.com%2Fpmop%2F2018%2F0406%2FB6EBEFEB3603EE41D1AD687F6AFB01376C2B4C28_size19_w640_h640.jpeg"
        },
      ]
    }
  },

  bindAllRecommendation: function () {
    wx.navigateTo({
      url: '../activity/list/activityList',
    })
  },

  bindRecommendationTap: function (e) {
    let activityId = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../activity/detail/activityDetail?activityId=' + activityId
    })
  },

  bindTapBusiness: function (e) {
    let bussinessId = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../business/business?id=' + bussinessId
    })
  },

  login: function () {
    wx.login({
      success: (res) => {
        console.log("登录成功！")
        console.log(res);
      },
      fail: (res) => {
        console.log("登录失败！")
        console.log(res);
      }
    })
  },

  onLoad: function() {
    this.login();
  }
})

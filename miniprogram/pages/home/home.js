// miniprogram/pages/home/home.js

const app = getApp()

Page({
  /**
   * Page initial data
   */
  data: {
    userInfo: {}, 
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    posts: [],
    placeholderPost: { //for debugging
      title: "Interesting Title 1",
      body: "Body text here- Lorem ipsum joihg kjhou oausdh oij kjhwo hsoduhf ouhl jknalkl oaihnfi- lngldm asldfkja iasudfh asiufh auishoqw q wofjh asdofiuh aushf weiourh sodif, sdog! asidf akdj fijawef.",
      media: [
        {
          type: "image",
          id: "m0001",
          source: "../../images/placeholders/2meirl4meirl.jpg"
        },
        {
          type: "video",
          id: "m0002",
          source: "../../images/placeholders/yesyesyesyesno.mp4"
        }
      ],
      votes: 420,
      id: "p0000",
      upvoted: "false",
      downvoted: "false",
      user: { // link to contact page?
        name: "gayboi",
      },
      url: "../../pages/post/post",
      time: {
        year: "2020",
        month: "7",
        day: "30",
        hour: "20",
        minute: "01"
      }
    }
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function(options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    this.loadMore()
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function() {
    this.setData({
      posts: []
    })
    app.globalData.loadnum = 0
  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function() {
    this.setData({
      posts: []
    })
    app.globalData.loadnum = 0
  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function() {
    this.setData({
      posts: []
    })
    app.globalData.loadnum = 0
    this.loadMore()
  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function() {
    this.loadMore()
  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function() {

  },

  loadMore: function() {
    const db = wx.cloud.database('scbasiscloud')
    var that = this
    var loadnuml = app.globalData.loadnum
    db.collection('posts').skip(loadnuml).limit(20).get({
      success: function(res) {
        that.setData({
          posts: that.data.posts.concat(res.data)
        })
        console.log(that.data.posts)
      }
    })
    db.collection('posts').count({success: function(res) {
      app.globalData.loadnum = Math.min(res.total,app.globalData.loadnum+20)
    }})
    console.log(app.globalData.loadnum)
  },
  toSearch: function(){
    wx.redirectTo({
      url: '../search/search',
    })
  },

  
})
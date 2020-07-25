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
    posts: []
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

  addPost: function(){
    wx.navigateTo({
      url: '../new post/new post'
    })
  }
})
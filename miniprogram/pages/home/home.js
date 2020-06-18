// miniprogram/pages/home/home.js

const appInstance = getApp()

Page({
  /**
   * Page initial data
   */
  data: {
    loadnuml: appInstance.loadnum,
    posts: []
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const db = wx.cloud.database('scbasiscloud')
    var that = this
    db.collection('posts').skip(this.data.loadnuml).limit(20).get({
      success: function(res){     
        console.log(res.data)
        that.setData({
          posts: res.data
        })
        console.log(that.data.posts)
      }
    })
    appInstance.loadnum = this.data.loadnuml + 20
    console.log(appInstance.loadnum)
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {
    const db = wx.cloud.database('scbasiscloud')
    var that = this
    db.collection('posts').skip(this.data.loadnuml).limit(20).get({
      success: function(res){     
        console.log(res.data)
        that.setData({
          posts: res.data
        })
        console.log(that.data.posts)
      }
    })
    appInstance.loadnum = this.data.loadnuml + 20
    console.log(appInstance.loadnum)
  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})
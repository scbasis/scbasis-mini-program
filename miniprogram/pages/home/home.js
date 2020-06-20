// miniprogram/pages/home/home.js

const appInstance = getApp()

Page({
  /**
   * Page initial data
   */
  data: {
    posts: []
  },

  loadMore: function(){
    const db = wx.cloud.database('scbasiscloud')
    var that = this
    var loadnuml = appInstance.loadnum
    db.collection('posts').skip(loadnuml).limit(20).get({
      success: function(res){     
        console.log(res.data)
        that.setData({
          posts: that.data.posts.concat(res.data)
        })
        console.log(that.data.posts)
      }
    })
    appInstance.loadnum = loadnuml + 20
    console.log(appInstance.loadnum)
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    loadMore()
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
    loadMore()
  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})
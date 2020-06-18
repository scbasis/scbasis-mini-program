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
    db.collection('posts').skip(this.data.loadnuml).limit(20).get({
      success: function(res){        
        console.log(res.data)
        this.setData({
          posts: res
        })
      }
    })
    console.log(this.data.posts)
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
    const db = wx.cloud.database({env:'scbasiscloud'})
    db.collection('posts').skip(this.data.loadnum).limit(20).get({
      success: res =>{
        console.log(res.data)
        this.setData({
          posts: posts + res.data
        })
      }
    })
  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})
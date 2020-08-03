// miniprogram/pages/post/post.js
Page({

  /**
   * Page initial data
   */
  data: {
    post: { // using first placeholder post from home.js
      title: "Interesting Title 1",
      body: "Body text here- Lorem ipsum joihg kjhou oausdh oij kjhwo hsoduhf ouhl jknalkl oaihnfi- lngldm asldfkja iasudfh asiufh auishoqw q wofjh asdofiuh aushf weiourh sodif, sdog! asidf akdj fijawef.",
      votes: 420,
      id: "p0000",
      upvoted: "false",
      downvoted: "false"
    },
    comment: {
      text: "This is a comment",
      votes: 11,
      depth: 0,
      id: "c0000",
      children: [{
        text: "This is a reply to a comment",
        votes: 6,
        depth: 1, 
        id: "c0001",
        children: [{
          text: "This is the third",
          votes: -1,
          depth: 2, 
          id: "c0002",
          children: []
        }]
      }]
    }
  },


  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    
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

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})
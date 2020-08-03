// miniprogram/pages/post/post.js
Page({

  /**
   * Page initial data
   */
  data: {
    post: { // using first placeholder post from home.js
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
      time: {
        year: "2020",
        month: "7",
        day: "30",
        hour: "20",
        minute: "01"
      }
    },
    comments: [{
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
    }, {
      text: "Comment, but less popular",
      votes: 6,
      depth: 0, 
      id: "c0003",
      children: [{
        text: "No one likes you",
        votes: -12,
        depth: 1,
        id: "c0004",
        children: []
      }]
    }]
  },

  backHome: function(){
    wx.redirectTo({
      url: '../home/home',
    })
  },

  onUpv: function(event){
    var cm = this.data.post.comments
    for (var i = 0; i < cm.length; i++){
      cm[i] = this.recUp(event.id,cm[i])
    }
    this.setData({
      comments: cm
    })

  },

  recUp: function(id, cm){
    if ('up-button-'+cm.id == id){
      return upv(cm)
    }
    for (var i = 0; i < cm.children.length; i++){
      cm.children[i] = this.recUp(id,cm.children[i])
    }
    return cm
  },

  upv: function(cm){
    if (cm.upvoted) {
      cm.votes--;
      cm.upvoted = false;
    } else {
      cm.votes++;
      cm.upvoted = true;
      if (cm.downvoted) {
        cm.downvoted = false;
        cm.votes++;
      }
    }

    return cm
  },

  onDownv: function(event){
    var cm = this.data.post.comments
    for (var i = 0; i < cm.length; i++){
      cm[i] = this.recDown(event.id,cm[i])
    }
    this.setData({
      comments: cm
    })
  },

  recDown: function(id, cm){
    if ('down-button-'+cm.id == id){
      return downv(cm)
    }
    for (var i = 0; i < cm.children.length; i++){
      cm.children[i] = this.recDown(id,cm.children[i])
    }
    return cm
  },

  downv: function(cm){
    if (cm.downvoted) {
      cm.votes++
      cm.downvoted = false;
    } else {
      cm.votes--;
      cm.downvoted = true;
      if (cm.upvoted) {
        cm.upvoted = false;
        cm.votes--;
      }
    }
    return cm
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
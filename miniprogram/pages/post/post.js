// miniprogram/pages/post/post.js
Page({

  /**
   * Page initial data
   */
  data: {
    post: { // using first placeholder post from home.js
      // title: "Interesting Title 1",
      // body: "Body text here- Lorem ipsum joihg kjhou oausdh oij kjhwo hsoduhf ouhl jknalkl oaihnfi- lngldm asldfkja iasudfh asiufh auishoqw q wofjh asdofiuh aushf weiourh sodif, sdog! asidf akdj fijawef.",
      // media: [
      //   {
      //     type: "image",
      //     id: "m0001",
      //     source: "../../images/placeholders/2meirl4meirl.jpg"
      //   },
      //   {
      //     type: "video",
      //     id: "m0002",
      //     source: "../../images/placeholders/yesyesyesyesno.mp4"
      //   }
      // ],
      // votes: 420,
      // id: "p0000",
      // upvoted: "false",
      // downvoted: "false",
      // user: { // link to contact page?
      //   name: "gayboi",
      // },
      // url: "../../pages/post/post",
      // time: {
      //   year: "2020",
      //   month: "7",
      //   day: "30",
      //   hour: "20",
      //   minute: "01"
      // },
      // comments: [{
      //   text: "This is a comment",
      //   votes: 11,
      //   depth: 0,
      //   id: "c0000",
      //   children: [{
      //     text: "This is a reply to a comment",
      //     votes: 6,
      //     depth: 1, 
      //     id: "c0001",
      //     children: [{
      //       text: "This is the third",
      //       votes: -1,
      //       depth: 2, 
      //       id: "c0002",
      //       children: []
      //     }]
      //   }]
      // }, {
      //   text: "Comment, but less popular",
      //   votes: 6,
      //   depth: 0, 
      //   id: "c0003",
      //   children: [{
      //     text: "No one likes you",
      //     votes: -12,
      //     depth: 1,
      //     id: "c0004",
      //     children: []
      //   }]
      // }]
    }
  },

  reply: function(event){
    var cm = this.data.post.comments
    for (var i = 0; i < cm.length; i++){
      cm[i] = this.reply(event.id,cm[i])
    }
    this.setData({
      comments: cm
    })

    this.upd()
  },

  replyRec: function(id, cm){
    if (cm.id == id){
      return addrep(cm)
    }
    for (var i = 0; i < cm.children.length; i++){
      cm.children[i] = this.replyRec(id,cm.children[i])
    }
    return cm
  },

  addrep: function(cm){
    cm.children = cm.children // add inputed text for comment
    return cm
  },

  onUpv: function(event){
    var cm = this.data.post.comments
    for (var i = 0; i < cm.length; i++){
      cm[i] = this.recUp(event.id,cm[i])
    }
    this.setData({
      comments: cm
    })

    this.upd()
  },

  recUp: function(id, cm){
    if ('up-button-'+cm.id == id){
      return upvc(cm)
    }
    for (var i = 0; i < cm.children.length; i++){
      cm.children[i] = this.recUp(id,cm.children[i])
    }
    return cm
  },

  upvc: function(cm){
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

    this.upd()
  },

  recDown: function(id, cm){
    if ('down-button-'+cm.id == id){
      return downvc(cm)
    }
    for (var i = 0; i < cm.children.length; i++){
      cm.children[i] = this.recDown(id,cm.children[i])
    }
    return cm
  },

  downvc: function(cm){
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

  upd: function(){
    const db = wx.cloud.database('scbasiscloud')
    const pt = this.properties.post
    db.collection('posts').doc(pt._id).update({
      data: {
        upvoted: pt.upvoted,
        downvoted: pt.downvoted,
        votes: pt.votes
      }
    })
  },

  upv(event) {
    var pt = this.data.post
    if (pt.upvoted) {
      pt.votes--;
      pt.upvoted = false;
    } else {
      pt.votes++;
      pt.upvoted = true;
      if (pt.downvoted) {
        pt.downvoted = false;
        pt.votes++;
      }
    }

    this.setData({
      post: this.data.post
    })

    this.upd()
    console.log(this.data.post.votes)
  },

  downv(event) {
    var pt = this.data.post
    if (pt.downvoted) {
      pt.votes++
      pt.downvoted = false;
    } else {
      pt.votes--;
      pt.downvoted = true;
      if (pt.upvoted) {
        pt.upvoted = false;
        pt.votes--;
      }
    }

    this.setData({
      post: this.data.post
    })

    this.upd()
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const db = wx.cloud.database({env: "scbasiscloud"})
    var that = this
    
    db.collection('posts').get().then(res => {
      console.log(res.data);
    }, res => {
      console.log("test failed")
      console.log(res)
    })
    console.log("Post loading...")
    db.collection('posts').doc(options.id).get().then(res => { // success
        that.setData({
          post: res.data
        })
      }, res => { // fail
        console.log(res)
      }
    );
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
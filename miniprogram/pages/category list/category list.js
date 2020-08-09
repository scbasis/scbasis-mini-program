// miniprogram/pages/category/category.js
Page({

  /**
   * Page initial data
   */
  data: {
    posts: [
      {
        title: "Placehoder1 title: Interesting things happened but idrk what happened",
        body: "Placeholder body: - Lorem ipsum joihg kjhou oausdh oij kjhwo hsoduhf ouhl jknalkl oaihnfi- lngldm asldfkja iasudfh asiufh auishoqw q wofjh asdofiuh aushf weiourh sodif, sdog! asidf akdj fijawef.",
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
        },
        crown: "gold"
      },
      {
        title: "Placehoder2 title: Interesting things happened but idrk what happened",
        body: "Placeholder body: - Lorem ipsum joihg kjhou oausdh oij kjhwo hsoduhf ouhl jknalkl oaihnfi- lngldm asldfkja iasudfh asiufh auishoqw q wofjh asdofiuh aushf weiourh sodif, sdog! asidf akdj fijawef.",
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
          name: "notgayboi",
        },
        url: "../../pages/post/post",
        time: {
          year: "2020",
          month: "8",
          day: "3",
          hour: "20",
          minute: "01"
        },
        crown: "silver"
      },
      {
        title: "Placehoder3 title: Interesting things happened but idrk what happened",
        body: "Placeholder body: - Lorem ipsum joihg kjhou oausdh oij kjhwo hsoduhf ouhl jknalkl oaihnfi- lngldm asldfkja iasudfh asiufh auishoqw q wofjh asdofiuh aushf weiourh sodif, sdog! asidf akdj fijawef.",
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
          month: "8",
          day: "1",
          hour: "20",
          minute: "01"
        },
        crown: "bronze"
      }
    ]
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

function showDiscussions(cat_id){
  var wxss_id = "cat_" + cat_id;
  $(wxss_id).wxss("display","block");//need help figuring out this part, on css the wxss is css, however it doesn't seem to recognize wxss...
}
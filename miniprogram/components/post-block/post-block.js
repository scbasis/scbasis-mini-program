// components/post-block/post-block.js
Component({
  /**
   * Component properties
   */
  properties: {
    post: {
      type: Object,
      value: undefined,
    }
  },

  /**
   * Component initial data
   */
  data: {

  },

  /**
   * Component methods
   */
  methods: {
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
      pt = this.properties.post
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
        post: this.properties.post
      })

      this.upd()
    },

    downv(event) {
      pt = this.properties.post
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
        post: this.properties.post
      })

      this.upd()
    }
  }
})
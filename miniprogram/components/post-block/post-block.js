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
    posts: {
      title: "Interesting Title 1",
      body: "Body text here- Lorem ipsum joihg kjhou oausdh oij kjhwo hsoduhf ouhl jknalkl oaihnfi- lngldm",
      votes: 420,
      id: "0000",
      upvoted: false,
      downvoted: false
  }
  },

  /**
   * Component methods
   */
  methods: {
    upv: function(event){
      if (this.data.posts.upvoted){
        this.data.posts.votes--;
        this.data.posts.upvoted = false;
      }       
      else {
        this.data.posts.votes++;
        this.data.posts.upvoted = true;
        if (this.data.posts.downvoted){
          this.data.posts.downvoted = false;
          this.data.posts.votes++;
        }      
      }
      this.setData({
        posts: this.data.posts
      })
    }
  },
  downv: function(event){
    if (this.data.posts.downvoted){
      this.data.posts.votes++;
      this.data.posts.downvoted = false;
    }       
    else {
      this.data.posts.votes--;
      this.data.posts.downvoted = true;
      if (this.data.posts.upvoted){
        this.data.posts.upvoted = false;
        this.data.posts.votes--;
      }      
    }
    this.setData({
      posts: this.data.posts
    })
  }
})

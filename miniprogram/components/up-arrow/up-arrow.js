// components/up-arrow/up-arrow.js
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
    upv(event){
      if ('upvote-button-' + this.properties.post.id == event.currentTarget.id){
        this.triggerEvent('upv',{},{})
      }
    }
  }
})

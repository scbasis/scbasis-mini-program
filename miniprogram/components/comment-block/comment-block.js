// components/comment-block/comment-block.js
Component({
  /**
   * Component properties
   */
  properties: {
    comment: {
      type: Object,
      value: undefined
    },
    recurse: {
      type: Boolean,
      value: true
    }
  },

  /**
   * Component initial data
   */
  data: {
    collapsed: false,
    display: "block",
    childrenHeight: 0,
    height: "fit-content",
    heightValue: 0
  },
  /**
   * Component lifecycle functions
   */
  lifetimes: {
    attached: function() {
      this.getChildrenHeight();
    }
  },


  /**
   * Component methods
   */
  methods: {

    getChildrenHeight: function () { // not working: returns null for res
      wx.createSelectorQuery().in(this).select('.children-container').boundingClientRect((res) => {
        // console.log(res);
        var childrenHeight = res.height;
        this.setData({
          "childrenHeight": childrenHeight, 
          "heightValue": childrenHeight,
          "height": childrenHeight + "px"
        });
      }).exec();
    },

    collapse: function(ev) {
      if (this.properties.comment.children.length == 0) return;
      this.data.collapsed = !this.data.collapsed;
      
      // console.log("collapse() called", ev);
      if (this.data.collapsed) {
        this.triggerEvent("collapse", {
          heightChange: -1 * this.data.childrenHeight
        }, {
          bubbles: true
        })
        this.setData({
          height: "0px",
          heightValue: 0
        });
      } else {
        this.triggerEvent("collapse", {
          heightChange: this.data.childrenHeight
        }, {
          bubbles: true
        })
        this.setData({
          heightValue: this.data.childrenHeight,
          height: this.data.childrenHeight + "px"
        });
      }
      // console.log(this.data.display);
      
    },

    handleChildrenCollapse: function(e) {
      var heightChange = e.detail.heightChange
      // console.log(this.data.childrenHeight, heightChange)
      this.setData({
        childrenHeight: this.data.childrenHeight + heightChange
      }, () => {
        if (!this.data.collapsed) {
          this.setData({
            heightValue: this.data.childrenHeight,
            height: this.data.childrenHeight + "px"
          })
        }
      })
      
    }
  }
})
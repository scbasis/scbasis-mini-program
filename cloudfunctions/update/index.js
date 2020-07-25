// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = wx.cloud.database('scbasiscloud')

exports.main = async (event, context) => {
  try {
    return await db.collection('posts').where({
      id: event.post.id
    })
    .update({
      data: {
        upvoted: event.post.upvoted,
        downvoted: event.post.downvoted,
        votes: event.post.votes
      },
    })
  } catch(e) {
    console.error(e)
  }
}
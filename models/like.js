import { HTTP } from '../utils/http'
class LikeModel extends HTTP {
  like(behavior, artID, category) {
    let url = behavior == 'like' ? 'like' : 'like/cancel'
    this.request({
      url: url,
      method: 'POST',
      data: {
        art_id: artID,
        type: category
      }
    })
  }

  // art_id: 点赞对象,例如你想对电影进行点赞，那这个参数就是电影的id号
  // type：点赞类型分为四种：100 电影 200 音乐 300 句子 400 书籍
  getClassicLikeStatus(artID, category, sCallback) {
    this.request({
      url: `classic/${category}/${artID}/favor`,
      success(res){
        sCallback(res)
      }
    })
  }

}
export { LikeModel }
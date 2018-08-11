Page({
  data: {
    news: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
  },
  onLoad() {
    this.getNewsList()
  },
  getNewsList() {
    wx.request({
      url: 'https://test-miniprogram.com/api/news/list',
      data: {
        type: "gn"
      },
      success: res => {
        let result = res.data.result
        this.setNewsList(result)
      },
      complete: () => {
        callback && callback()
      }
    })
  },
  setNewsList(result) {
    let newsList = [];
    console.log(result)
    for (let index in result) {
      newsList.push({
        title:  result[index].title,
        imgURL: result[index].firstImage,
        source: result[index].source,
        date:   result[index].date
      })
    }
    this.setData({
      news: newsList
    })
  }
})
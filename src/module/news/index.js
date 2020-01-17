import React from 'react'

const News = ({ getNum, add, children }) => (
  <div>
    热门博客列表 {getNum}
    <span onClick={add}>add</span>
  </div>
)
export default News

import React, { Component } from 'react'

// export class News extends Component {
//   render() {
//     return (
//       <div>
//         热门博客列表 {getNum}
//         <span onClick={add}>add</span>
//       </div>
//     )
//   }
// }
const News = ({getNum,add,children})=>(
  <div>
      热门博客列表 {getNum}
      <span onClick={add}>add</span>
  </div>
)
export default News

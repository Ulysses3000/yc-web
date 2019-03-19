import { connect } from 'react-redux'
import News from '../../module/news'
import { addone } from '../action'

const mapStateToProps = (state, ownProps) => {
  getNum: state+'@'
}

const mapDispatchToProps = (dispatch) => {
  add: ()=>{
    dispatch(addone())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News)
import {combineReducers} from 'redux'
const login = (state=0,action)=>{
  switch (action.type){
    case 'ADD_ONE' :
      return ++state;
    case 'reduce' :
      return --state;
    default:
      return state;
  }
}

export default combineReducers({
  login
})
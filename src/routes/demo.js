import {Link} from 'dva/router'
import {connect} from 'dva'
import styles from './demo.css'

function demo({dispatch,num}) {

  function Add() {
    console.log(num);
    dispatch({
      type:"num/add",
      // payload: 1,
    })
  }

  return(
    <div className={styles.checkNum}>
      <input type="button" value="+" onClick={Add}/>
      <input type="input" value={num}/>
      <input type="button" value="-"/>
      <div><Link to="/list">to list demo</Link></div>
    </div>
  )
}


export default connect(
  ({num})=>({num})
)(demo);

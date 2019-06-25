import React,{ useEffect } from 'react'
import { connect } from 'react-redux'
import { getExampleNumber,addExampleNumber } from '../actions/example-action'

const Example = props => {
  useEffect(() => {
    props.getExampleNumber();
  }, [])
  return (
    <div>
      <div>
        example : {props.exampleNumber}
        <hr/>
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <button type="button" className="btn btn-warning" onClick={()=>props.addExampleNumber(-10)}>-10</button>
          <button type="button" className="btn btn-warning" onClick={()=>props.addExampleNumber(-5)}>-5</button>
          <button type="button" className="btn btn-warning" onClick={()=>props.addExampleNumber(-1)}>-1</button>
        </div>
        <div className="custom-file">
          <input type="text" value={props.exampleNumber} readOnly className="form-control" />
        </div>
        <div className="input-group-append">
          <button type="button" className="btn btn-primary" onClick={()=>props.addExampleNumber(1)}>+1</button>
          <button type="button" className="btn btn-primary" onClick={()=>props.addExampleNumber(5)}>+5</button>
          <button type="button" className="btn btn-primary" onClick={()=>props.addExampleNumber(10)}>+10</button>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = ({ example }) => {
  return { ...example }
}
export default connect(mapStateToProps,{getExampleNumber,addExampleNumber})(Example)

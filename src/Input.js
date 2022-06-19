import React from "react";
import Box from "./Box";
class Input extends React.Component {
  constructor() {
    
    super();
    this.widthRef = React.createRef()
  this.heightRef = React.createRef()
  this.colorRef = React.createRef()

    this.state = {
      myArr: []
    };
    
   
   
    this.handleChangeState = this.handleChangeState.bind(this);

   
  }
  
  handleChangeState() {
    let width = this.widthRef.current.value;
    let height = this.heightRef.current.value;
    let color = this.colorRef.current.value;
    let arr = [...this.state.myArr];
    arr.push({width, height, color});
    this.setState({ myArr: arr });
  }

  render() {
    return (
      <div>
        <label>width</label>
        <input ref={this.widthRef} />
        <br />
        <label>height</label>
        <input ref={this.heightRef} />
        <br />
        <label>color</label>
        <input ref={this.colorRef} type="color" />
        <br />
        <button onClick={this.handleChangeState}>click and create</button>
        <div>
          {this.state.myArr.map((item, index) => (
             <Box key={`card-${index}`} {...item} />
  ))}
        </div>
      </div>
    );
  }
}

export default Input;

import React from 'react'


class Box extends React.Component{
    

    render(){
        return(
            <div style={{width: `${this.props.width}px`, height: `${this.props.height}px`, backgroundColor: `${this.props.color}`}}>

            </div>
        )
    }


}
export default  Box
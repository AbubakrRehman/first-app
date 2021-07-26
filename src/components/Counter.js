import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            countt:0
        }
        
    }

increment_count=()=>{
    this.setState({
        countt: this.state.countt + 1
    }
         
      );
    }
 
    
    render() {
        return (
            <div>
                <h1>{this.state.countt}</h1>
                <button onClick={this.increment_count}>Increment</button>
            </div>
        )
    }
}

export default Counter

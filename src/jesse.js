import React, { Component } from 'react'
import './App.css'

class Confirm extends Component{
	yes = () => alert(`You said yes`)
	no = () => alert(`You said no`)
	render = () => <div class = "dialog">
					<div>Are you sure?</div>
					<button className = "succ" onClick = {this.yes}>Yes</button>
					<button className = "fail" onClick = {this.no}>No</button>
				  </div>
}

export default Confirm